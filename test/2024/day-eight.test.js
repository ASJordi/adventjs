import { expect, test } from 'vitest';
import { drawRace } from "../../src/2024/day-eight/index.js";

test('Test #01 - Return type', () => {
    expect(typeof drawRace([0, 5, -3], 10)).toBe("string")
})

test('Test #02 - drawRace([0, 5, -3], 10)', () => {
    expect(drawRace([0, 5, -3], 10)).toStrictEqual(
        "  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3"
    )
})

test('Test #03 - drawRace([2, -1, 0, 5], 8)', () => {
    expect(drawRace([2, -1, 0, 5], 8)).toStrictEqual(
        "   ~~r~~~~~ /1\n" +
                "  ~~~~~~~r /2\n" +
                " ~~~~~~~~ /3\n" +
                "~~~~~r~~ /4"
    )
})

test('Test #04 - drawRace([3, 7, -2], 12)', () => {
    expect(drawRace([3, 7, -2], 12)).toStrictEqual(
        "  ~~~r~~~~~~~~ /1\n" +
                " ~~~~~~~r~~~~ /2\n" +
                "~~~~~~~~~~r~ /3"
    )
})

test('Test #05 - drawRace([0, 0, 0], 6)', () => {
    expect(drawRace([0, 0, 0], 6)).toStrictEqual(
        "  ~~~~~~ /1\n" +
                " ~~~~~~ /2\n" +
                "~~~~~~ /3"
    )
})

test('Test #06 - drawRace([5, 3, -4], 9)', () => {
    expect(drawRace([5, 3, -4], 9)).toStrictEqual(
        "  ~~~~~r~~~ /1\n" +
                " ~~~r~~~~~ /2\n" +
                "~~~~~r~~~ /3"
    )
})