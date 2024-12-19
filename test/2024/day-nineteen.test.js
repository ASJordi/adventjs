import { expect, test } from 'vitest';
import { distributeWeight } from "../../src/2024/day-nineteen/index.js";

test('Test #01 - Return type', () => {
    expect(typeof distributeWeight(1)).toBe("string")
})

test('Test #02 - distributeWeight(1)', () => {
    expect(distributeWeight(1)).toStrictEqual(
        ' _ \n' + '|_|'
    )
})

test('Test #03 - distributeWeight(2)', () => {
    expect(distributeWeight(2)).toStrictEqual(
        ' ___ \n' + '|___|'
    )
})

test('Test #04 - distributeWeight(3)', () => {
    expect(distributeWeight(3)).toStrictEqual(
        ' _ \n' + '|_|_\n' + '|___|'
    )
})

test('Test #05 - distributeWeight(4)', () => {
    expect(distributeWeight(4)).toStrictEqual(
        ' ___ \n' + '|___|\n' + '|___|'
    )
})

test('Test #06 - distributeWeight(5)', () => {
    expect(distributeWeight(5)).toStrictEqual(
        ' _____ \n' + '|     |\n' + '|_____|'
    )
})

test('Test #07 - distributeWeight(6)', () => {
    expect(distributeWeight(6)).toStrictEqual(
        ' _ \n' + '|_|___\n' + '|     |\n' + '|_____|'
    )
})

test('Test #08 - distributeWeight(7)', () => {
    expect(distributeWeight(7)).toStrictEqual(
        ' ___ \n|___|_\n|     |\n|_____|'
    )
})

test('Test #09 - distributeWeight(18)', () => {
    expect(distributeWeight(18)).toStrictEqual(
        " _ \n" +
        "|_|_\n" +
        "|___|_\n" +
        "|     |\n" +
        "|_____|___\n" +
        "|         |\n" +
        "|_________|"
    )
})

test('Test #10 - distributeWeight(121)', () => {
    expect(distributeWeight(121)).toStrictEqual(
        " _ \n" +
        "|_|_______\n" +
        "|         |\n" +
        "|_________|\n" +
        "|         |\n" +
        "|_________|\n" +
        "|         |\n" +
        "|_________|\n" +
        "|         |\n" +
        "|_________|\n" +
        "|         |\n" +
        "|_________|\n" +
        "|         |\n" +
        "|_________|\n" +
        "|         |\n" +
        "|_________|\n" +
        "|         |\n" +
        "|_________|\n" +
        "|         |\n" +
        "|_________|\n" +
        "|         |\n" +
        "|_________|\n" +
        "|         |\n" +
        "|_________|\n" +
        "|         |\n" +
        "|_________|"
    )
})