import { expect, test } from 'vitest';
import { findBalancedSegment } from "../../src/2023/day-twenty-one/index.js";

test('Test #01 - Returns an array', () => {
    expect(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]) instanceof Array).toBe(true)
})

test('Test #02', () => {
    expect(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])).toStrictEqual(
        [
            2,
            5
        ]
    )
})

test('Test #03', () => {
    expect(findBalancedSegment([1, 1, 0])).toStrictEqual(
        [
            1,
            2
        ]
    )
})

test('Test #04', () => {
    expect(findBalancedSegment([1, 1, 1])).toStrictEqual([])
})

test('Test #05', () => {
    expect(findBalancedSegment([1, 0, 1])).toStrictEqual(
        [
            0,
            1
        ]
    )
})

test('Test #06', () => {
    expect(findBalancedSegment([1, 0, 1, 0])).toStrictEqual(
        [
            0,
            3
        ]
    )
})

test('Test #07', () => {
    expect(findBalancedSegment([1, 1, 0, 1, 0, 1])).toStrictEqual(
        [
            1,
            4
        ]
    )
})

test('Test #08', () => {
    expect(findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])).toStrictEqual(
        [
            0,
            7
        ]
    )
})

test('Test #09', () => {
    expect(findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])).toStrictEqual(
        [
            5,
            10
        ]
    )
})