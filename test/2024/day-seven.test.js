import { expect, test } from 'vitest';
import { fixPackages } from "../../src/2024/day-seven/index.js";

test('Test #01 - Return type', () => {
    expect(typeof fixPackages('a(bc)de')).toStrictEqual('string');
})

test('Test #02 - fixPackages(\'a(bc)de\')', () => {
    expect(fixPackages('a(bc)de')).toStrictEqual("acbde")
})

test('Test #03 - fixPackages(\'a(bc(def)g)h\')', () => {
    expect(fixPackages('a(bc(def)g)h')).toStrictEqual("agdefcbh")
})

test('Test #04 - fixPackages(\'abc(def(gh)i)jk\')', () => {
    expect(fixPackages('abc(def(gh)i)jk')).toStrictEqual("abcighfedjk")
})

test('Test #05 - fixPackages(\'a(b(c))e\')', () => {
    expect(fixPackages('a(b(c))e')).toStrictEqual("acbe")
})

test('Test #06 - fixPackages(\'a(b(cd(efg)))h\')', () => {
    expect(fixPackages('a(b(cd(efg)))h')).toStrictEqual("acdgfebh")
})

test('Test #07 - fixPackages(\'(abc(def(ghi)))\')', () => {
    expect(fixPackages('(abc(def(ghi)))')).toStrictEqual("defihgcba")
})