import { expect, test } from 'vitest';
import { prepareGifts } from "../../src/2024/day-one/index.js";

test('Test #01 - Return type', () => {
    expect(
        typeof prepareGifts([3, 1, 2, 3, 4, 2, 5])
    ).toBe("object")
})

test('Test #02 - prepareGifts([3, 1, 2, 3, 4, 2, 5])', () => {
    expect(prepareGifts([3, 1, 2, 3, 4, 2, 5])).toStrictEqual([
        1, 2, 3, 4, 5
    ])
})

test('Test #03 - prepareGifts([5, 5, 5, 5])', () => {
    expect(prepareGifts([5, 5, 5, 5])).toStrictEqual([5])
})

test('Test #04 - prepareGifts([1, 2, 3])', () => {
    expect(prepareGifts([1, 2, 3])).toStrictEqual([1, 2, 3])
})

test('Test #05 - prepareGifts([])', () => {
    expect(prepareGifts([])).toStrictEqual([])
})

test('Test #06 - prepareGifts([10, 20, 10, 30, 20, 30, 40])', () => {
    expect(prepareGifts([10, 20, 10, 30, 20, 30, 40])).toStrictEqual([
        10, 20, 30, 40
    ])
})

test('Test #07 - prepareGifts([3, 1, 2, 3, 1, 2])', () => {
    expect(prepareGifts([3, 1, 2, 3, 1, 2])).toStrictEqual([
        1, 2, 3
    ])
})
