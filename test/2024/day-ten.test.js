import { expect, test } from 'vitest';
import { compile } from "../../src/2024/day-ten/index.js";

test('Test #01 - Return type', () => {
    expect(typeof compile([
        "MOV 0 A",
        "INC A"
    ])).toBe("number")
})

test('Test #02', () => {
    expect(compile([
        "MOV 0 A",
        "INC A"
    ])).toStrictEqual(1)
})

test('Test #03', () => {
    expect(compile([
        "INC A",
        "INC A",
        "DEC A",
        "MOV A B",
    ])).toStrictEqual(1)
})

test('Test #04', () => {
    expect(compile([
        "MOV 5 B",
        "DEC B",
        "MOV B A",
        "INC A"
    ])).toStrictEqual(5)
})

test('Test #05', () => {
    expect(compile([
        "INC C",
        "DEC B",
        "MOV C Y",
        "INC Y",
    ])).toStrictEqual(undefined)
})

test('Test #06', () => {
    expect(compile([
        "MOV 2 X",
        "DEC X",
        "DEC X",
        "JMP X 1",
        "MOV X A"
    ])).toStrictEqual(-2)
})

test('Test #07', () => {
    expect(compile([
        "MOV 3 C",
        "DEC C",
        "DEC C",
        "DEC C",
        "JMP C 3",
        "MOV C A"
    ])).toStrictEqual(-1)
})