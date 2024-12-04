import { expect, test } from 'vitest';
import { createXmasTree } from "../../src/2024/day-four/index.js";

test('Test #01 - Return type', () => {
    expect(
        typeof createXmasTree(3, "*")
    ).toBe("string");
})

test('Test #02 - createXmasTree(3, "*")', () => {
    expect(createXmasTree(3, "*")).toStrictEqual(
        "__*__\n_***_\n*****\n__#__\n__#__"
    )
})

test('Test #03 - createXmasTree(5, "+")', () => {
    expect(createXmasTree(5, "+")).toStrictEqual(
        "____+____\n___+++___\n__+++++__\n_+++++++_\n+++++++++\n____#____\n____#____"
    )
})

test('Test #04 - createXmasTree(6, "@")', () => {
    expect(createXmasTree(6, "@")).toStrictEqual(
        "_____@_____\n____@@@____\n___@@@@@___\n__@@@@@@@__\n_@@@@@@@@@_\n@@@@@@@@@@@\n_____#_____\n_____#_____"
    )
})

test('Test #05 - createXmasTree(1, "*")', () => {
    expect(createXmasTree(1, "*")).toStrictEqual(
        "*\n#\n#"
    )
})

test('Test #06 - createXmasTree(4, "#")', () => {
    expect(createXmasTree(4, "#")).toStrictEqual(
        "___#___\n__###__\n_#####_\n#######\n___#___\n___#___"
    )
})