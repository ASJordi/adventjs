import { expect, test } from 'vitest';
import { removeSnow } from "../../src/2024/day-sixteen/index.js";

test('Test #01 - Return type', () => {
    expect(typeof removeSnow("abbaca")).toBe("string")
})

test('Test #02 - removeSnow("abbaca")', () => {
    expect(removeSnow("abbaca")).toStrictEqual("ca")
})

test('Test #03 - removeSnow("azxxzy")', () => {
    expect(removeSnow("azxxzy")).toStrictEqual("ay")
})

test('Test #04 - removeSnow("aabccba")', () => {
    expect(removeSnow("aabccba")).toStrictEqual("a")
})

test('Test #05 - removeSnow("aaabbaacc")', () => {
    expect(removeSnow("aaabbaacc")).toStrictEqual("a")
})

test('Test #06 - removeSnow("xyzzy")', () => {
    expect(removeSnow("xyzzy")).toStrictEqual("x")
})

test('Test #07 - removeSnow("abbacddce")', () => {
    expect(removeSnow("abbacddce")).toStrictEqual("e")
})

test('Test #08 - removeSnow("")', () => {
    expect(removeSnow("")).toStrictEqual("")
})

test('Test #09 - removeSnow("a")', () => {
    expect(removeSnow("a")).toStrictEqual("a")
})

test('Test #10 - removeSnow("aa")', () => {
    expect(removeSnow("aa")).toStrictEqual("")
})

test('Test #11 - removeSnow("ab")', () => {
    expect(removeSnow("ab")).toStrictEqual("ab")
})

test('Test #12 - removeSnow("abc")', () => {
    expect(removeSnow("abc")).toStrictEqual("abc")
})