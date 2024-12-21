import { expect, test } from 'vitest';
import { treeHeight } from "../../src/2024/day-twenty-one/index.js";

test('Test #01 - Return type', () => {
    expect(typeof treeHeight({
        value: '🎁',
        left: null,
        right: null
    })).toBe("number")
})

test('Test #02', () => {
    expect(treeHeight({
        value: '🎁',
        left: null,
        right: null
    })).toStrictEqual(1)
})

test('Test #03', () => {
    expect(treeHeight({
        value: '🎁',
        left: {
            value: '🎄',
            left: null,
            right: null
        },
        right: {
            value: '❄️',
            left: null,
            right: null
        }
    })).toStrictEqual(2)
})

test('Test #04', () => {
    expect(treeHeight({
        value: '🎁',
        left: {
            value: '🎄',
            left: {
                value: '⭐',
                left: null,
                right: null
            },
            right: null
        },
        right: {
            value: '❄️',
            left: null,
            right: null
        }
    })).toStrictEqual(3)
})

test('Test #05', () => {
    expect(treeHeight(null)).toStrictEqual(0)
})

test('Test #06', () => {
    expect(treeHeight({
        value: '🎁',
        left: {
            value: '🎄',
            left: {
                value: '⭐',
                left: {
                    value: '🎅',
                    left: null,
                    right: null
                },
                right: null
            },
            right: null
        },
        right: null
    })).toStrictEqual(4)
})