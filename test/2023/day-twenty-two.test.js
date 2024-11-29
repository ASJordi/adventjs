import { expect, test } from 'vitest';
import { compile } from "../../src/2023/day-twenty-two/index.js";

test('Test #01 - Returns a number', () => {
    expect(typeof compile('++*-')).toBe('number')
})

test('Test #02', () => {
    expect(compile('++*-')).toStrictEqual(3)
})

test('Test #03', () => {
    expect(compile('++¿+?')).toStrictEqual(3)
})

test('Test #04', () => {
    expect(compile('-+¿+?')).toStrictEqual(0)
})

test('Test #05', () => {
    expect(compile('++*¿-?')).toStrictEqual(3)
})

test('Test #06', () => {
    expect(compile('++%++<')).toStrictEqual(6)
})

test('Test #07', () => {
    expect(compile('++%++<++¿*?')).toStrictEqual(16)
})

test('Test #08', () => {
    expect(compile('++¿+?¿+?¿+?')).toStrictEqual(5)
})

test('Test #09', () => {
    expect(compile('--¿+++?')).toStrictEqual(-2)
})

test('Test #10', () => {
    expect(compile('--¿+++?+++¿--?')).toStrictEqual(-1)
})

test('Test #11', () => {
    expect(compile('<%+¿++%++<?')).toStrictEqual(7)
})

test('Test #12', () => {
    expect(compile('<<<<<<+<<<<<+%')).toStrictEqual(2)
})