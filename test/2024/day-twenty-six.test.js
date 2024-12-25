import { expect, test } from 'vitest';
import { getCompleted } from "../../src/2024/day-twenty-six/index.js";

test('Test #01 - Return type', () => {
    expect(typeof getCompleted("01:00:00", "03:00:00")).toBe("string")
})

test('Test #02', () => {
    expect(getCompleted("01:00:00", "03:00:00")).toStrictEqual("33%")
})

test('Test #03', () => {
    expect(getCompleted("02:00:00", "04:00:00")).toStrictEqual("50%")
})

test('Test #04', () => {
    expect(getCompleted("01:00:00", "01:00:00")).toStrictEqual("100%")
})

test('Test #05', () => {
    expect(getCompleted("00:10:00", "01:00:00")).toStrictEqual("17%")
})

test('Test #06', () => {
    expect(getCompleted("01:10:10", "03:30:30")).toStrictEqual("33%")
})

test('Test #07', () => {
    expect(getCompleted("03:30:30", "05:50:50")).toStrictEqual("60%")
})

test('Test #08', () => {
    expect(getCompleted("00:00:00", "01:00:00")).toStrictEqual("0%")
})

test('Test #9', () => {
    expect(getCompleted("00:00:01", "00:00:02")).toStrictEqual("50%")
})

test('Test #10', () => {
    expect(getCompleted("23:59:59", "24:00:00")).toStrictEqual("100%")
})
