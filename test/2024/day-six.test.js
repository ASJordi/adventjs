import { expect, test } from 'vitest';
import { inBox } from "../../src/2024/day-six/index.js";

test('Test #01 - Return type', () => {
    expect(
        typeof inBox([
            "###",
            "#*#",
            "###"
        ])
    ).toBe('boolean')
})

test('Test #02', () => {
    expect(
        inBox([
            "###",
            "#*#",
            "###"
        ])
    ).toStrictEqual(true)
})

test('Test #03', () => {
    expect(
        inBox([
            "#*#",
            "###",
            "###"
        ])
    ).toStrictEqual(false)
})

test('Test #04', () => {
    expect(
        inBox([
            "###",
            "# #",
            "###"
        ])
    ).toStrictEqual(false)
})


test('Test #05', () => {
    expect(
        inBox([
            "####",
            "#* #",
            "#  #",
            "####"
        ])
    ).toStrictEqual(true)
})

test('Test #06', () => {
    expect(
        inBox([
            "#####",
            "#   #",
            "#  #*",
            "####"
        ])
    ).toStrictEqual(false)
})

test('Test #07', () => {
    expect(
        inBox([
            "#####",
            "#   #",
            "#   #",
            "#   #",
            "#####"
        ])
    ).toStrictEqual(false)
})

test('Test #08', () => {
    expect(
        inBox([
            "#####",
            "#   #",
            "#   #",
            "*#  #",
            "#####"
        ])
    ).toStrictEqual(false)
})

test('Test #09', () => {
    expect(
        inBox([
            "##*##",
            "#   #",
            "#   #",
            "#   #",
            "#####"
        ])
    ).toStrictEqual(false)
})

test('Test #10', () => {
    expect(
        inBox([
            '####',
            '#  #',
            '##*#'
        ])
    ).toStrictEqual(false)
})

test('Test #11', () => {
    expect(
        inBox([
            '###',
            '###',
            '#*#'
        ])
    ).toStrictEqual(false)
})