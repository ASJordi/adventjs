import { expect, test } from 'vitest';
import { fixGiftList } from "../../src/2024/day-twenty/index.js";

test('Test #01 - Return type', () => {
    expect(typeof fixGiftList(['puzzle', 'car'], ['puzzle', 'car', 'ball'])).toBe("object")
})

test('Test #02', () => {
    expect(fixGiftList(['puzzle', 'car'], ['puzzle', 'car', 'ball'])).toStrictEqual(
        {
            "missing": {
                "ball": 1
            },
            "extra": {}
        }
    )
})

test('Test #03', () => {
    expect(fixGiftList(['car', 'puzzle', 'car'], ['puzzle', 'car', 'doll'])).toStrictEqual(
        {
            "missing": {
                "doll": 1
            },
            "extra": {
                "car": 1
            }
        }
    )
})

test('Test #04', () => {
    expect(fixGiftList(['train', 'book', 'kite'], ['train', 'kite', 'book', 'kite'])).toStrictEqual(
        {
            "missing": {
                "kite": 1
            },
            "extra": {}
        }
    )
})

test('Test #05', () => {
    expect(fixGiftList(['bear', 'car'], ['bear', 'car', 'car'])).toStrictEqual(
        {
            "missing": {
                "car": 1
            },
            "extra": {}
        }
    )
})

test('Test #06', () => {
    expect(fixGiftList([], ['bear', 'car', 'car'])).toStrictEqual(
        {
            "missing": {
                "car": 2,
                "bear": 1
            },
            "extra": {}
        }
    )
})

test('Test #07', () => {
    expect(fixGiftList(['puzzle', 'puzzle', 'car'], ['puzzle', 'car'])).toStrictEqual(
        {
            "missing": {},
            "extra": {
                "puzzle": 1
            }
        }
    )
})

test('Test #08', () => {
    expect(fixGiftList(['car'], ['car', 'puzzle', 'ball'])).toStrictEqual(
        {
            "missing": {
                "puzzle": 1,
                "ball": 1
            },
            "extra": {}
        }
    )
})

test('Test #09', () => {
    expect(fixGiftList(['bear', 'bear', 'car'], ['bear', 'bear', 'car'])).toStrictEqual(
        {
            "missing": {},
            "extra": {}
        }
    )
})