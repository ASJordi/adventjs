import { expect, test } from 'vitest';
import { maxDistance } from "../../src/2023/day-six/index.js";

test('Test #01 - Returns a Number', () => {
    expect(
        typeof maxDistance(">>*<")
    ).toBe("number")
})

test('Test #02 - maxDistance(">>*<")', () => {
    expect(maxDistance(">>*<")).toStrictEqual(2)
})

test('Test #03 - maxDistance("<<<<<")', () => {
    expect(maxDistance("<<<<<")).toStrictEqual(5)
})

test('Test #04 - maxDistance(">***>")', () => {
    expect(maxDistance(">***>")).toStrictEqual(5)
})

test('Test #05 - maxDistance("**********")', () => {
    expect(maxDistance("**********")).toStrictEqual(10)
})

test('Test #06 - maxDistance("<<**>>")', () => {
    expect(maxDistance("<<**>>")).toStrictEqual(2)
})