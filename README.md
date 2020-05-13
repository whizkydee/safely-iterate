## safely-iterate

🌱 Fail-safe optimized array iteration utilities for reactive environments.

## ✨ Features

- 📦 ~400b (gzipped)
- 🙅‍♂️ Zero dependencies
- 🌈 TypeScript Support
- ✅ Fully tested and reliable
- 🎁 Works with `NodeList` and `HTMLCollection`
- ⚒ CommonJS, ESM & browser standalone support

## 🔧 Installation

You can easily install this package with yarn or npm:

```
$ yarn add safely-iterate
```

or

```
$ npm install --save safely-iterate
```

## 🤷‍♂ Why this?

If you've worked with JavaScript well enough, I bet you're familiar with errors like
"TypeError: Cannot read property 'map' of undefined". Now, this can occur due to several
reasons like unpredictable data response from an API, delayed arrival of data etc.

With JavaScript apps dominating the web today, this can be quite costly as it could result in
several problems like CSR interruption, broken server-side rendering and the worst of them
all - unusable systems.

This library exists to provide a solution by offering re-usable utilities intentionally
optimized to fail gracefully and leverage a pass-first-replace-later strategy which only works
in reactive environments. As a bonus, you can use the functions to iterate over `NodeList` and
`HTMLCollection` without worrying about cross-browser compat.

## 📖 Usage

To start with, this library exposes the safe functions _safeEvery_, _safeFilter_, _safeFind_,
_safeFindIndex_, _safeForEach_, _safeMap_, _safeReduce_, _safeReduceRight_, _safeSome_ and
_safeSort_.

The common signature for all safe functions excluding `safeReduce` and `safeReduceRight` look
something like:

```ts
function safeFn<T>(
  array: T[] | NodeList | HTMLCollection,
  // Here, `any` is the actual callback return value of the safe function being used.
  callbackfn: (value: T, index: number, obj: T[]) => any,
  thisArg?: any
)

// This variant is for when a non-array is passed to the safe function
function safeFn<T>(
  array: T,
  // Here, `any` is the actual callback return value of the safe function being used.
  callbackfn: (value: undefined, index: undefined, obj: never[]) => any,
  thisArg?: any
)
```

See [index.d.ts](https://github.com/whizkydee/safely-iterate/blob/master/index.d.ts) for more
information on `safeReduce`, `safeReduceRight` and the signatures of all the safe functions.

In the example below, regardless of what type `items` in state is, it gracefully gets
converted to an array internally, which also means even if the type gets polluted sometime in
the future of the component's existence, safeMap will retain its internal type of array.

However, as long as `items` is an array in the component, any time it's updated, safeMap will
react to that change and display the updated items. _Same applies for `safeEvery`,
`safeFilter` etc._

### Example

```js
import { useEffect, useCallback } from 'react'
import { safeMap } from 'safely-iterate'

function ItemList() {
  const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const getItems = useCallback(() => {
    return fetch('https://api.example.com/items').then(res => res.json())
  }, [])

  useEffect(() => {
    ;(async function () {
      const result = await getItems()
      setIsLoaded(true)
      setItems(result.items)
    })()
  }, [])

  if (!isLoaded) return <div>Loading...</div>
  return (
    <ul>
      {safeMap(items, item => {
        if (!item) return
        return (
          <li key={item.name}>
            {item.name} {item.price}
          </li>
        )
      })}
    </ul>
  )
}
```

✨

## 🤝 License

MIT © [Olaolu Olawuyi](https://twitter.com/mrolaolu)
