import { expect, test } from 'vitest';
import { moveTrain } from "../../src/2024/day-nine/index.js";

test('Test #01 - Return type', () => {
    expect(typeof moveTrain([
        "·····",
        "··*··",
        "··@··",
        "··o··",
        "··o··"
    ], 'U')).toBe("string")
})

test('Test #02', () => {
    expect(moveTrain([
        "·····",
        "··*··",
        "··@··",
        "··o··",
        "··o··"
    ], 'U')).toStrictEqual("eat")
})

test('Test #03', () => {
    expect(moveTrain([
        "·····",
        "··*··",
        "··@··",
        "··o··",
        "··o··"
    ], 'D')).toStrictEqual("crash")
})

test('Test #04', () => {
    expect(moveTrain([
        "·····",
        "··*··",
        "··@··",
        "··o··",
        "··o··"
    ], 'R')).toStrictEqual("none")
})

test('Test #05', () => {
    expect(moveTrain([
        "··@··",
        "··o··",
        "·*o··",
        "··o··",
        "··o··"
    ], 'U')).toStrictEqual("crash")
})

test('Test #06', () => {
    expect(moveTrain([
        "··@··",
        "··o··",
        "·*o··",
        "··o··",
        "··o··"
    ], 'L')).toStrictEqual("none")
})

test('Test #07', () => {
    expect(moveTrain([
        "·····",
        "··@··",
        "··*··",
        "·····",
        "·····"
    ], 'D')).toStrictEqual("eat")
})
