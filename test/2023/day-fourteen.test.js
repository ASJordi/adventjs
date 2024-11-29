import { expect, test } from 'vitest';
import { maxGifts } from "../../src/2023/day-fourteen/index.js";

test('Test #01 - Return a number', () => {
    expect(typeof maxGifts([2, 4, 2])).toBe('number')
})

test('Test #02 - maxGifts([1, 2, 3, 1])', () => {
    expect(maxGifts([1, 2, 3, 1])).toStrictEqual(4)
})

test('Test #03 - maxGifts([2, 7, 9, 3, 1])', () => {
    expect(maxGifts([2, 7, 9, 3, 1])).toStrictEqual(12)
})

test('Test #04 - maxGifts([0, 0, 0, 0, 1])', () => {
    expect(maxGifts([0, 0, 0, 0, 1])).toStrictEqual(1)
})

test('Test #05 - maxGifts([100])', () => {
    expect(maxGifts([100])).toStrictEqual(100)
})

test('Test #06 - maxGifts([1, 1, 1, 1])', () => {
    expect(maxGifts([1, 1, 1, 1])).toStrictEqual(2)
})

test('Test #07 - maxGifts([1, 1, 1])', () => {
    expect(maxGifts([1, 1, 1])).toStrictEqual(2)
})

test('Test #08 - maxGifts([3, 4, 5])', () => {
    expect(maxGifts([3, 4, 5])).toStrictEqual(8)
})

test('Test #09 - maxGifts([99])', () => {
    expect(maxGifts([99])).toStrictEqual(99)
})