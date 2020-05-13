declare namespace safelyIterate {
  type List<T> = T[] | NodeList | HTMLCollection
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param array An array, NodeList, HTMLCollection or any other type that eventually gets
   * converted to an empty array internally.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  export function safeEvery<T>(
    array: List<T>,
    callbackfn: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): boolean
  export function safeEvery<T>(
    array: T,
    callbackfn: (value: undefined, index: undefined, obj: undefined[]) => unknown,
    thisArg?: any
  ): boolean

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param array An array, NodeList, HTMLCollection or any other type that eventually gets
   * converted to an empty array internally.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  export function safeFilter<T, S extends T>(
    array: List<T>,
    callbackfn: (value: T, index: number, obj: T[]) => value is S,
    thisArg?: any
  ): S[]
  export function safeFilter<T>(
    array: List<T>,
    callbackfn: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): T[]
  export function safeFilter<T>(
    array: T,
    callbackfn: (value: undefined, index: undefined, obj: undefined[]) => unknown,
    thisArg?: any
  ): T[]

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param array An array, NodeList, HTMLCollection or any other type that eventually gets
   * converted to an empty array internally.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  export function safeFind<T, S extends T>(
    array: List<T>,
    predicate: (value: T, index: number, obj: T[]) => value is S,
    thisArg?: any
  ): S | undefined
  export function safeFind<T>(
    array: List<T>,
    predicate: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): T | undefined
  export function safeFind<T>(
    array: T,
    predicate: (value: undefined, index: undefined, obj: undefined[]) => unknown,
    thisArg?: any
  ): undefined

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param array An array, NodeList, HTMLCollection or any other type that eventually gets
   * converted to an empty array internally.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  export function safeFindIndex<T>(
    array: List<T>,
    predicate: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): number
  export function safeFindIndex<T>(
    array: T,
    predicate: (value: undefined, index: undefined, obj: undefined[]) => unknown,
    thisArg?: any
  ): number

  /**
   * Performs the specified action for each element in an array.
   * @param array An array, NodeList, HTMLCollection or any other type that eventually gets
   * converted to an empty array internally.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  export function safeForEach<T>(
    array: List<T>,
    callbackfn: (value: T, index: number, obj: T[]) => void,
    thisArg?: any
  ): void
  export function safeForEach<T>(
    array: T,
    callbackfn: (value: undefined, index: undefined, obj: undefined[]) => void,
    thisArg?: any
  ): void

  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param array An array, NodeList, HTMLCollection or any other type that eventually gets
   * converted to an empty array internally.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  export function safeMap<T, U>(
    array: List<T>,
    callbackfn: (value: T, index: number, obj: T[]) => U,
    thisArg?: any
  ): U[]
  export function safeMap<T, U>(
    array: T,
    callbackfn: (value: undefined, index: undefined, obj: undefined[]) => U,
    thisArg?: any
  ): U[]

  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param array An array, NodeList, HTMLCollection or any other type that eventually gets
   * converted to an empty array internally.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  export function safeReduce<T>(
    array: List<T>,
    callbackfn: (previousValue: T, currentValue: T, currentIndex: number, obj: T[]) => T
  ): T
  export function safeReduce<T>(
    array: List<T>,
    callbackfn: (previousValue: T, currentValue: T, currentIndex: number, obj: T[]) => T,
    initialValue: T
  ): T
  export function safeReduce<T, U>(
    array: List<T>,
    callbackfn: (previousValue: U, currentValue: T, currentIndex: number, obj: T[]) => U,
    initialValue: U
  ): U
  export function safeReduce<T>(
    array: T,
    callbackfn: (
      previousValue: undefined,
      currentValue: undefined,
      currentIndex: undefined,
      obj: undefined[]
    ) => T
  ): T
  export function safeReduce<T>(
    array: T,
    callbackfn: (
      previousValue: undefined,
      currentValue: undefined,
      currentIndex: undefined,
      obj: undefined[]
    ) => T,
    initialValue: T
  ): T
  export function safeReduce<T, U>(
    array: T,
    callbackfn: (
      previousValue: undefined,
      currentValue: undefined,
      currentIndex: undefined,
      obj: undefined[]
    ) => U,
    initialValue: U
  ): U

  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param array An array, NodeList, HTMLCollection or any other type that eventually gets
   * converted to an empty array internally.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  export function safeReduceRight<T>(
    array: List<T>,
    callbackfn: (previousValue: T, currentValue: T, currentIndex: number, obj: T[]) => T
  ): T
  export function safeReduceRight<T>(
    array: List<T>,
    callbackfn: (previousValue: T, currentValue: T, currentIndex: number, obj: T[]) => T,
    initialValue: T
  ): T
  export function safeReduceRight<T, U>(
    array: List<T>,
    callbackfn: (previousValue: U, currentValue: T, currentIndex: number, obj: T[]) => U,
    initialValue: U
  ): U
  export function safeReduceRight<T>(
    array: T,
    callbackfn: (
      previousValue: undefined,
      currentValue: undefined,
      currentIndex: undefined,
      obj: undefined[]
    ) => T
  ): T
  export function safeReduceRight<T>(
    array: T,
    callbackfn: (
      previousValue: undefined,
      currentValue: undefined,
      currentIndex: undefined,
      obj: undefined[]
    ) => T,
    initialValue: T
  ): T
  export function safeReduceRight<T, U>(
    array: T,
    callbackfn: (
      previousValue: undefined,
      currentValue: undefined,
      currentIndex: undefined,
      obj: undefined[]
    ) => U,
    initialValue: U
  ): U

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param array An array, NodeList, HTMLCollection or any other type that eventually gets
   * converted to an empty array internally.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  export function safeSome<T>(
    array: List<T>,
    callbackfn: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): boolean
  export function safeSome<T>(
    array: T,
    callbackfn: (value: undefined, index: undefined, obj: undefined[]) => unknown,
    thisArg?: any
  ): boolean

  /**
   * Sorts an array.
   * @param array An array, NodeList, HTMLCollection or any other type that eventually gets
   * converted to an empty array internally.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   */
  export function safeSort<T>(array: List<T>, compareFn?: (a: T, b: T) => number): T[]
  export function safeSort<T>(
    array: T,
    compareFn?: (a: undefined, b: undefined) => number
  ): undefined[]
}

export = safelyIterate
