import { expect, test } from 'vitest';
import { organizeShoes } from "../../src/2024/day-five/index.js";

test('Test #01 - Return type', () => {
    expect(organizeShoes([])).toBeInstanceOf(Array);
})

test('Test #02', () => {
    expect(organizeShoes([
        { type: "I", size: 38 },
        { type: "R", size: 38 },
        { type: "R", size: 42 },
        { type: "I", size: 41 },
        { type: "I", size: 42 }
    ])).toStrictEqual(
        [
            38,
            42
        ]
    )
})

test('Test #03', () => {
    expect(organizeShoes([
        { type: "I", size: 38 },
        { type: "R", size: 38 },
        { type: "I", size: 38 },
        { type: "I", size: 38 },
        { type: "R", size: 38 }
    ])).toStrictEqual(
        [
            38,
            38
        ]
    )
})

test('Test #04', () => {
    expect(organizeShoes([
        { type: "I", size: 38 },
        { type: "R", size: 36 },
        { type: "R", size: 42 },
        { type: "I", size: 41 },
        { type: "I", size: 42 }
    ])).toStrictEqual(
        [
            42
        ]
    )
})

test('Test #05', () => {
    expect(organizeShoes([
        { type: "I", size: 40 },
        { type: "R", size: 40 },
        { type: "I", size: 40 },
        { type: "R", size: 40 }
    ])).toStrictEqual(
        [
            40,
            40
        ]
    )
})

test('Test #06', () => {
    expect(organizeShoes([
        { type: "I", size: 39 },
        { type: "R", size: 39 },
        { type: "R", size: 39 }
    ])).toStrictEqual(
        [
            39
        ]
    )
})
