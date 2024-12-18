import { expect, test } from 'vitest';
import { detectBombs } from "../../src/2024/day-seventeen/index.js";

test('Test #01 - Return type', () => {
    expect(typeof detectBombs([
        [true, true],
        [true, true]
    ])).toBe("object")
})

test('Test #02', () => {
    expect(detectBombs([
        [true, false, false],
        [false, true, false],
        [false, false, false]
    ])).toStrictEqual(
        [
            [
                1,
                2,
                1
            ],
            [
                2,
                1,
                1
            ],
            [
                1,
                1,
                1
            ]
        ]
    )
})

test('Test #03', () => {
    expect(detectBombs([
        [false, true, false],
        [true, false, true],
        [false, true, false]
    ])).toStrictEqual(
        [
            [
                2,
                2,
                2
            ],
            [
                2,
                4,
                2
            ],
            [
                2,
                2,
                2
            ]
        ]
    )
})

test('Test #04', () => {
    expect(detectBombs([
        [true, true],
        [true, true],
        [false, false]
    ])).toStrictEqual(
        [
            [
                3,
                3
            ],
            [
                3,
                3
            ],
            [
                2,
                2
            ]
        ]
    )
})

test('Test #05', () => {
    expect(detectBombs([
        [true, true],
        [true, true]
    ])).toStrictEqual(
        [
            [
                3,
                3
            ],
            [
                3,
                3
            ]
        ]
    )
})

test('Test #06', () => {
    expect(detectBombs([
        [false, false, false],
        [false, true, false],
        [false, false, false]
    ])).toStrictEqual(
        [
            [
                1,
                1,
                1
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                1,
                1
            ]
        ]
    )
})

test('Test #07', () => {
    expect(detectBombs([
        [true, false],
        [false, false]
    ])).toStrictEqual(
        [
            [
                0,
                1
            ],
            [
                1,
                1
            ]
        ]
    )
})