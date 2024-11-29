import { expect, test } from 'vitest';
import { checkIsValidCopy } from "../../src/2023/day-twelve/index.js";

test('Test #01 - Return a boolean', () => {
    expect(typeof checkIsValidCopy(
        'Santa Claus is coming',
        'sa#ta cl#us is comin#'
    )).toBe('boolean')
})

test('Test #02 - Return true', () => {
    expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')).toStrictEqual(true)
})

test('Test #03 - Return false', () => {
    expect(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')).toStrictEqual(false)
})

test('Test #04 - Return false', () => {
    expect(checkIsValidCopy('Santa Claus', ' Santa Claus ')).toStrictEqual(false)
})

test('Test #05 - Return true', () => {
    expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toStrictEqual(true)
})

test('Test #06 - Return false', () => {
    expect(checkIsValidCopy('Santa Claus', 'sant##claus+')).toStrictEqual(false)
})

test('Test #07 - Return true', () => {
    expect(checkIsValidCopy('Santa Claus', 's#+:. c:. s')).toStrictEqual(true)
})

test('Test #08 - Return false', () => {
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toStrictEqual(false)
})

test('Test #09 - Return false', () => {
    expect(checkIsValidCopy('Santa Claus', 'SantA ClauS')).toStrictEqual(false)
})

test('Test #10 - Return true', () => {
    expect(checkIsValidCopy('3 regalos', '3 .+:# #:')).toStrictEqual(true)
})

test('Test #11 - Return true', () => {
    expect(checkIsValidCopy('3 regalos', '3        ')).toStrictEqual(true)
})

test('Test #12 - Return true', () => {
    expect(checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')).toStrictEqual(true)
})

test('Test #13 - Return false', () => {
    expect(checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño')).toStrictEqual(false)
})