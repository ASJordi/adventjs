import { expect, test } from 'vitest';
import { optimizeIntervals } from "../../src/2023/day-seventeen/index.js";

test('Test #01 - Returns an array', () => {
    let res = optimizeIntervals([])
    expect(res instanceof Array).toBe(true)
})

test('Test #02', () => {
    expect(optimizeIntervals([[2, 7], [3, 4], [5, 8]])).toStrictEqual(
        [
            [
                2,
                8
            ]
        ]
    )
})

test('Test #03', () => {
    expect(optimizeIntervals([[3, 4], [5, 8], [2, 7]])).toStrictEqual(
        [
            [
                2,
                8
            ]
        ]
    )
})

test('Test #04', () => {
    expect(optimizeIntervals([[1, 3], [2, 6], [8, 10]])).toStrictEqual(
        [
            [
                1,
                6
            ],
            [
                8,
                10
            ]
        ]
    )
})

test('Test #05', () => {
    expect(optimizeIntervals([[1, 2], [3, 4], [5, 6]])).toStrictEqual(
        [
            [
                1,
                2
            ],
            [
                3,
                4
            ],
            [
                5,
                6
            ]
        ]
    )
})

test('Test #06', () => {
    expect(optimizeIntervals([[5, 7], [6, 8]])).toStrictEqual(
        [
            [
                5,
                8
            ]
        ]
    )
})

test('Test #07', () => {
    expect(optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]])).toStrictEqual(
        [
            [
                1,
                5
            ],
            [
                6,
                10
            ],
            [
                11,
                15
            ],
            [
                16,
                20
            ]
        ]
    )
})

test('Test #08', () => {
    expect(optimizeIntervals([[1, 15], [8, 12], [4, 7]])).toStrictEqual(
        [
            [
                1,
                15
            ]
        ]
    )
})