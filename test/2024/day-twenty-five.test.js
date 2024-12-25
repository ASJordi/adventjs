import { expect, test } from 'vitest';
import { execute } from "../../src/2024/day-twenty-five/index.js";

test('Test #01 - Return type', () => {
    expect(typeof execute(`+++`)).toBe("number")
})

test('Test #02', () => {
    expect(execute(`+++`)).toStrictEqual(3)
})

test('Test #03', () => {
    expect(execute(`+--`)).toStrictEqual(-1)
})

test('Test #04', () => {
    expect(execute(`>+++[-]`)).toStrictEqual(0)
})

test('Test #05', () => {
    expect(execute(`>>>+{++}`)).toStrictEqual(3)
})

test('Test #06', () => {
    expect(execute(`+{[-]+}`)).toStrictEqual(1)
})

test('Test #07', () => {
    expect(execute(`-[+>]++`)).toStrictEqual(2)
})

test('Test #08', () => {
    expect(execute(`-[+{++}]++{[-]}++`)).toStrictEqual(2)
})

test('Test #09', () => {
    expect(execute(`{+}{+}{+}`)).toStrictEqual(0)
})

test('Test #10', () => {
    // empty code
    expect(execute(``)).toStrictEqual(0)
})

test('Test #11', () => {
    // nested loops
    expect(execute(`+++{[-]+++[-]+}`)).toStrictEqual(1)
})

test('Test #12', () => {
    // skip increment if condition is zero
    expect(execute(`{>++>++}`)).toStrictEqual(0)
})

test('Test #13', () => {
    // move and increment
    expect(execute(`++++[-->]>++`)).toStrictEqual(2)
})