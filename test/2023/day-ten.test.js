import { expect, test } from 'vitest';
import { createChristmasTree } from "../../src/2023/day-ten/index.js";

test('Test #01 - Return a string', () => {
    expect(typeof createChristmasTree("x", 3)).toBe('string')
})

test('Test #02 - createChristmasTree("x", 3)', () => {
    expect(createChristmasTree("x", 3)).toStrictEqual(
        "  x\n" +
                " x x\n" +
                "x x x\n" +
                "  |\n"
    )
})

test('Test #03 - createChristmasTree("xo", 4)', () => {
    expect(createChristmasTree("xo", 4)).toStrictEqual(
        "   x\n" +
                "  o x\n" +
                " o x o\n" +
                "x o x o\n" +
                "   |\n"
    )
})

test('Test #04 - createChristmasTree("123", 5)', () => {
    expect(createChristmasTree("123", 5)).toStrictEqual(
        "    1\n" +
        "   2 3\n" +
        "  1 2 3\n" +
        " 1 2 3 1\n" +
        "2 3 1 2 3\n" +
        "    |\n"
    )
})

test('Test #05 - createChristmasTree("*@o", 3)', () => {
    expect(createChristmasTree("*@o", 3)).toStrictEqual(
        "  *\n" +
        " @ o\n" +
        "* @ o\n" +
        "  |\n"
    )
})