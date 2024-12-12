import { expect, test } from 'vitest';
import { calculatePrice } from "../../src/2024/day-twelve/index.js";

test('Test #01 - Return type', () => {
    expect(typeof calculatePrice("***")).toBe("number")
})

test('Test #02 - calculatePrice("***")', () => {
    expect(calculatePrice("***")).toStrictEqual(3)
})

test('Test #03 - calculatePrice("*o")', () => {
    expect(calculatePrice("*o")).toStrictEqual(4)
})

test('Test #04 - calculatePrice("o*")', () => {
    expect(calculatePrice("o*")).toStrictEqual(6)
})

test('Test #05 - calculatePrice("*o@")', () => {
    expect(calculatePrice("*o@")).toStrictEqual(94)
})

test('Test #06 - calculatePrice("^#")', () => {
    expect(calculatePrice("^#")).toStrictEqual(40)
})

test('Test #07 - calculatePrice("#@Z")', () => {
    expect(calculatePrice("#@Z")).toStrictEqual(undefined)
})