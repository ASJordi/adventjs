import { expect, test } from 'vitest';
import { getIndexsForPalindrome } from "../../src/2023/day-eleven/index.js";

test('Test #01 - getIndexsForPalindrome(\'anna\')', () => {
    expect(getIndexsForPalindrome('anna')).toStrictEqual([])
})

test('Test #02 - getIndexsForPalindrome(\'abab\')', () => {
    expect(getIndexsForPalindrome('abab')).toStrictEqual([0, 1])
})

test('Test #03 - getIndexsForPalindrome(\'abac\')', () => {
    expect(getIndexsForPalindrome('abac')).toStrictEqual(null)
})

test('Test #04 - getIndexsForPalindrome(\'aaaaaaaa\')', () => {
    expect(getIndexsForPalindrome('aaaaaaaa')).toStrictEqual([])
})

test('Test #05 - getIndexsForPalindrome(\'aaababa\')', () => {
    expect(getIndexsForPalindrome('aaababa')).toStrictEqual([1, 3])
})

test('Test #06 - getIndexsForPalindrome(\'caababa\')', () => {
    expect(getIndexsForPalindrome('caababa')).toStrictEqual(null)
})

test('Test #07 - getIndexsForPalindrome(\'rotavator\')', () => {
    expect(getIndexsForPalindrome('rotavator')).toStrictEqual([])
})

test('Test #08 - getIndexsForPalindrome(\'rotaratov\')', () => {
    expect(getIndexsForPalindrome('rotaratov')).toStrictEqual([4, 8])
})

test('Test #09 - getIndexsForPalindrome(\'saippuakivikauppias\')', () => {
    expect(getIndexsForPalindrome('saippuakivikauppias')).toStrictEqual([])
})

test('Test #10 - Return a function', () => {
    expect(typeof getIndexsForPalindrome).toBe('function')
})