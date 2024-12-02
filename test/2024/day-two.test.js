import { expect, test } from 'vitest';
import { createFrame } from "../../src/2024/day-two/index.js";

test('Test #01 - Return type', () => {
    expect(
        typeof createFrame(["midu"])
    ).toBe("string")
})

test('Test #02 - createFrame(["midu"])', () => {
    expect(createFrame(["midu"])).toStrictEqual(
        "********\n* midu *\n********"
    )
})

test('Test #03 - createFrame(["midu", "madeval", "educalvolpz"])', () => {
    expect(createFrame(["midu", "madeval", "educalvolpz"])).toStrictEqual(
        "***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************"
    )
})

test('Test #04 - createFrame(["a", "bb", "ccc"])', () => {
    expect(createFrame(["a", "bb", "ccc"])).toStrictEqual(
        "*******\n* a   *\n* bb  *\n* ccc *\n*******"
    )
})

test('Test #05 - createFrame(["a", "bb", "ccc", "dddd"])', () => {
    expect(createFrame(["a", "bb", "ccc", "dddd"])).toStrictEqual(
        "********\n* a    *\n* bb   *\n* ccc  *\n* dddd *\n********"
    )
})

test('Test #06 - createFrame(["midu", "madeval", "educalvolpz", "midu"])', () => {
    expect(createFrame(["midu", "madeval", "educalvolpz", "midu"])).toStrictEqual(
        "***************\n* midu        *\n* madeval     *\n* educalvolpz *\n* midu        *\n***************"
    )
})