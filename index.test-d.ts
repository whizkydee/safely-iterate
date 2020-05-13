import {
  safeEvery,
  safeFilter,
  safeFind,
  safeFindIndex,
  safeForEach,
  safeMap,
  safeReduce,
  safeReduceRight,
  safeSome,
  safeSort,
} from './index'
import { expectType, expectError } from 'tsd'

const sample = [1, 2, 3, 4, 5, '6']
const notAFunction = 'definitely not a function'
const notAnArray = new Object()

// Expect the signature of all the safe functions to be correct.
expectType<boolean>(safeEvery(sample, value => value < 6))
expectType<(number | string)[]>(safeFilter(sample, value => Number(value) < 6))
expectType<number | string | undefined>(safeFind(sample, value => Number(value) == 3))
expectType<number>(safeFindIndex(sample, value => value == 3))
expectType<void>(
  safeForEach(sample, value => {
    expectType<number | string>(value)
    return Number(value) * 2
  })
)
expectType<number | string>(safeReduce(sample, (acc, cur) => acc + String(cur), ''))
expectType<number | string>(safeReduceRight(sample, (acc, cur) => acc + String(cur), ''))
expectType<boolean>(safeSome(sample, value => Number(value) < 6))
expectType<(number | string)[]>(
  safeSort(sample, (a, b) => {
    return Number(b) - Number(a)
  })
)
expectType<string[]>(safeMap(sample, value => String(value)))

// Expect an error when the second argument is not a function
expectError(safeEvery(sample, notAFunction))
expectError(safeFilter(sample, notAFunction))
expectError(safeFind(sample, notAFunction))
expectError(safeFindIndex(sample, notAFunction))
expectError(safeForEach(sample, notAFunction))
expectError(safeReduce(sample, notAFunction))
expectError(safeReduceRight(sample, notAFunction))
expectError(safeSome(sample, notAFunction))
expectError(safeSort(sample, notAFunction))
expectError(safeMap(sample, notAFunction))

// Expect no error when a non-array is passed as the first argument
expectType<boolean>(safeEvery(notAnArray, value => value))
expectType<Object[]>(safeFilter(notAnArray, value => value))
expectType<undefined>(safeFind(notAnArray, value => value))
expectType<number>(safeFindIndex(notAnArray, value => value))
expectType<void>(safeForEach(notAnArray, value => value))
expectType<boolean>(safeSome(notAnArray, value => value))
expectType<undefined[]>(safeSort(notAnArray, a => a))
expectType<undefined[]>(safeMap(notAnArray, value => value))
