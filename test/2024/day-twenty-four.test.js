import { expect, test } from 'vitest';
import { isTreesSynchronized } from "../../src/2024/day-twenty-four/index.js";

test('Test #01 - Return type', () => {
    expect(typeof isTreesSynchronized(
        { value: '🎄' },
        { value: '🎄' }
    )).toBe("object")
})

test('Test #02', () => {
    expect(isTreesSynchronized(
        { value: '🎄' },
        { value: '🎄' }
    )).toStrictEqual(
        [
            true,
            "🎄"
        ]
    )
})

test('Test #03', () => {
    expect(isTreesSynchronized(
        { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } },
        { value: '🎄', left: { value: '🎅' }, right: { value: '⭐' } }
    )).toStrictEqual(
        [
            true,
            "🎄"
        ]
    )
})

test('Test #04', () => {
    expect(isTreesSynchronized(
        { value: '✨', left: { value: '⭐' }, right: { value: '🎅' } },
        { value: '✨', left: { value: '🎅' }, right: { value: '🎁' } }
    )).toStrictEqual(
        [
            false,
            "✨"
        ]
    )
})

test('Test #05', () => {
    expect(isTreesSynchronized(
        { value: '🎁' },
        { value: '🎁' }
    )).toStrictEqual(
        [
            true,
            "🎁"
        ]
    )
})

test('Test #06', () => {
    expect(isTreesSynchronized(
        { value: '🎄' },
        { value: '🎁' }
    )).toStrictEqual(
        [
            false,
            "🎄"
        ]
    )
})

test('Test #07', () => {
    expect(isTreesSynchronized(
        { value: '🎄', left: { value: '⭐' } },
        { value: '🎄', right: { value: '⭐' } }
    )).toStrictEqual(
        [
            true,
            "🎄"
        ]
    )
})