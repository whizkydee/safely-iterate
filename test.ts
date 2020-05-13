import * as safelyIterate from './index'

describe('safely-iterate assertions', () => {
  it('should not error when a non-array is passed', () => {
    Object.values(safelyIterate).forEach(safeFn => {
      const calledWithString = safeFn.bind(null, '', k => k, undefined)
      const calledWithObject = safeFn.bind(null, {}, k => k, undefined)
      const calledWithFunction = safeFn.bind(null, new Function(), k => k, undefined)

      expect(calledWithString).not.toThrow()
      expect(calledWithObject).not.toThrow()
      expect(calledWithFunction).not.toThrow()
    })
  })

  it('should error when the second argument is not a function', () => {
    Object.values(safelyIterate).forEach(safeFn => {
      const calledWithArray = safeFn.bind(null, [], [], undefined)
      const calledWithString = safeFn.bind(null, [], '', undefined)
      const calledWithObject = safeFn.bind(null, [], {}, undefined)

      expect(calledWithArray).toThrow(TypeError)
      expect(calledWithString).toThrow(TypeError)
      expect(calledWithObject).toThrow(TypeError)
    })
  })

  it('should properly execute safeReduce like Array#reduce', () => {
    const { safeReduce } = safelyIterate

    const maxCallback = (acc, cur) => Math.max(acc.x, cur.x)
    const maxCallback2 = (max, cur) => Math.max(max, cur)

    expect(safeReduce([{ x: 2 }, { x: 22 }, { x: 42 }], maxCallback)).toBe(NaN)
    expect(safeReduce([{ x: 2 }, { x: 22 }], maxCallback)).toBe(22)
    expect(safeReduce([{ x: 2 }], maxCallback)).toEqual({ x: 2 })
    expect(() => safeReduce([], maxCallback)).toThrow(TypeError)
    expect(safeReduce([0, 1, 2, 3], (acc, cur) => acc + cur, 0)).toBe(6)

    expect(
      safeReduce(
        [{ x: 22 }, { x: 42 }].map(el => el.x),
        maxCallback2,
        -Infinity
      )
    ).toBe(42)
  })

  it('should properly execute safeReduceRight like Array#reduceRight', () => {
    const { safeReduceRight } = safelyIterate

    const maxCallback = (acc, cur) => Math.max(acc.x, cur.x)
    const maxCallback2 = (max, cur) => Math.max(max, cur)

    expect(safeReduceRight([0, 1, 2, 3, 4], (acc, cur) => acc + cur, 10)).toBe(20)
    expect(safeReduceRight(['1', '2', '3', '4', '5'], (acc, cur) => acc + cur)).toBe('54321')
    expect(() => safeReduceRight([], maxCallback)).toThrow(TypeError)

    expect(
      safeReduceRight(
        [{ x: 22 }, { x: 42 }].map(el => el.x),
        maxCallback2,
        -Infinity
      )
    ).toBe(42)
  })

  it('should properly apply the value of thisArg', () => {
    const sample = [1, 2, 3, 4]
    const { safeMap, safeFilter, safeEvery } = safelyIterate

    const safeMapWithThisArg = safeMap(
      sample,
      function (value) { return value * this },
      2
    )
    const safeFilterWithThisArg = safeFilter(
      sample,
      function (value) { return value < this },
      4
    )
    const safeEveryWithThisArg = safeEvery(
      sample,
      function (value) { return value <= this },
      4
    )

    expect(safeEveryWithThisArg).toBeTruthy()
    expect(safeMapWithThisArg).toEqual([2, 4, 6, 8])
    expect(safeFilterWithThisArg).toEqual([1, 2, 3])
  })
})
