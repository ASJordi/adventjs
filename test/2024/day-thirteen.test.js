import { expect, test } from 'vitest';
import { isRobotBack } from "../../src/2024/day-thirteen/index.js";

test('Test #01 - Return type', () => {
    expect(typeof isRobotBack("RL")).toBe("boolean")
})

test('Test #02 - isRobotBack("R")', () => {
    expect(isRobotBack("R")).toStrictEqual(
        [
            1,
            0
        ]
    )
})

test('Test #03 - isRobotBack("RL")', () => {
    expect(isRobotBack("RL")).toStrictEqual(true)
})

test('Test #04 - isRobotBack("RLUD")', () => {
    expect(isRobotBack("RLUD")).toStrictEqual(true)
})

test('Test #05 - isRobotBack("*RU")', () => {
    expect(isRobotBack("*RU")).toStrictEqual(
        [
            2,
            1
        ]
    )
})

test('Test #06 - isRobotBack("R*U")', () => {
    expect(isRobotBack("R*U")).toStrictEqual(
        [
            1,
            2
        ]
    )
})

test('Test #07 - isRobotBack("LLL!R")', () => {
    expect(isRobotBack("LLL!R")).toStrictEqual(
        [
            -4,
            0
        ]
    )
})

test('Test #08 - isRobotBack("R?R")', () => {
    expect(isRobotBack("R?R")).toStrictEqual(
        [
            1,
            0
        ]
    )
})

test('Test #09 - isRobotBack("U?D")', () => {
    expect(isRobotBack("U?D")).toStrictEqual(true)
})

test('Test #10 - isRobotBack("R!L")', () => {
    expect(isRobotBack("R!L")).toStrictEqual(
        [
            2,
            0
        ]
    )
})

test('Test #11 - isRobotBack("U!D")', () => {
    expect(isRobotBack("U!D")).toStrictEqual(
        [
            0,
            2
        ]
    )
})

test('Test #12 - isRobotBack("R?L")', () => {
    expect(isRobotBack("R?L")).toStrictEqual(true)
})

test('Test #13 - isRobotBack("U?U")', () => {
    expect(isRobotBack("U?U")).toStrictEqual(
        [
            0,
            1
        ]
    )
})