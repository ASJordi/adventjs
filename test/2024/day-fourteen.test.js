import { expect, test } from 'vitest';
import { minMovesToStables } from "../../src/2024/day-fourteen/index.js";

test('Test #01 - Return type', () => {
    expect(typeof minMovesToStables([2, 6, 9], [3, 8, 5])).toBe("number")
})

test('Test #02', () => {
    expect(minMovesToStables([2, 6, 9], [3, 8, 5])).toStrictEqual(3)
})

test('Test #03', () => {
    expect(minMovesToStables([1, 1, 3], [1, 4, 8])).toStrictEqual(8)
})

test('Test #04', () => {
    expect(minMovesToStables([5, 15, 10], [8, 18, 12])).toStrictEqual(8)
})

test('Test #05', () => {
    expect(minMovesToStables([30, 1, 2], [1, 2, 30])).toStrictEqual(0)
})

test('Test #06', () => {
    expect(minMovesToStables([30, 20, 10], [35, 25, 15])).toStrictEqual(15)
})

test('Test #07', () => {
    expect(minMovesToStables([100, 1], [50, 75])).toStrictEqual(74)
})