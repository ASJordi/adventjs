import { expect, test } from 'vitest';
import { organizeGifts } from '../../src/2023/day-eight/index.js';

test('Test #01 - Return a String', () => {
    expect(typeof organizeGifts(`76a11b`)).toBe('string');
})

test('Test #02 - organizeGifts("76a11b")', () => {
    expect(organizeGifts("76a11b")).toStrictEqual("[a]{a}{a}(aaaaaa){b}(b)");
})

test('Test #03 - organizeGifts("20a")', () => {
    expect(organizeGifts("20a")).toStrictEqual("{a}{a}")
})

test('Test #04 - organizeGifts("70b120a4c")', () => {
    expect(organizeGifts("70b120a4c")).toStrictEqual("[b]{b}{b}[a][a]{a}{a}(cccc)")
})

test('Test #05 - organizeGifts("9c")', () => {
    expect(organizeGifts("9c")).toStrictEqual("(ccccccccc)")
})

test('Test #06 - organizeGifts("19d51e")', () => {
    expect(organizeGifts("19d51e")).toStrictEqual("{d}(ddddddddd)[e](e)")
})