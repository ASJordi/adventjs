import { expect, test } from 'vitest';
import { findMissingNumbers } from "../../src/2024/day-twenty-three/index.js";

test('Test #01 - Return type', () => {
    expect(typeof findMissingNumbers([1, 2, 4, 6])).toBe("object")
})

test('Test #02', () => {
    expect(findMissingNumbers([1, 2, 4, 6])).toStrictEqual(
        [
            3,
            5
        ]
    )
})

test('Test #03', () => {
    expect(findMissingNumbers([4, 8, 7, 2])).toStrictEqual(
        [
            1,
            3,
            5,
            6
        ]
    )
})

test('Test #04', () => {
    expect(findMissingNumbers([3, 2, 1, 1])).toStrictEqual(
        []
    )
})

test('Test #05', () => {
    expect(findMissingNumbers([5, 5, 5, 3, 3, 2, 1])).toStrictEqual(
        [
            4
        ]
    )
})

test('Test #06', () => {
    expect(findMissingNumbers([1, 2, 3, 4, 5])).toStrictEqual(
        []
    )
})