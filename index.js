function executeArrayMethodOrFailSafe(methodName, array, callbackfn) {
  const result = Array.isArray(array) || isDOMCollection(array) ? array.slice() : []
  const computedArguments = [result, callbackfn, arguments[3]]

  // Dynamic logic for reduce and reduceRight since their signatures
  // differ from the regular array iteration methods like map & forEach.
  if (methodName == 'reduce' || methodName == 'reduceRight') {
    // By default, remove the last argument from the computed arguments list
    const initialValue = computedArguments.pop()

    if (arguments.length > 3) {
      // Put back the initial value if it exists in supplied arguments
      computedArguments.push(initialValue)
    }
  }

  return Array.prototype[methodName].call(...computedArguments)
}

function isDOMCollection(array) {
  return array instanceof NodeList || array instanceof HTMLCollection
}
export function safeEvery() {
  return executeArrayMethodOrFailSafe('every', ...arguments)
}
export function safeFilter() {
  return executeArrayMethodOrFailSafe('filter', ...arguments)
}
export function safeFind() {
  return executeArrayMethodOrFailSafe('find', ...arguments)
}
export function safeFindIndex() {
  return executeArrayMethodOrFailSafe('findIndex', ...arguments)
}
export function safeForEach() {
  return executeArrayMethodOrFailSafe('forEach', ...arguments)
}
export function safeMap() {
  return executeArrayMethodOrFailSafe('map', ...arguments)
}
export function safeReduce() {
  return executeArrayMethodOrFailSafe('reduce', ...arguments)
}
export function safeReduceRight() {
  return executeArrayMethodOrFailSafe('reduceRight', ...arguments)
}
export function safeSome() {
  return executeArrayMethodOrFailSafe('some', ...arguments)
}
export function safeSort() {
  return executeArrayMethodOrFailSafe('sort', ...arguments)
}
