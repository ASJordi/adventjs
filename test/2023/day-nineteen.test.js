import { expect, test } from 'vitest';
import { revealSabotage } from "../../src/2023/day-nineteen/index.js";

test('Test #01 - Returns an array', () => {
    expect(revealSabotage(
        [
            ['*', ' ', ' ', ' '],
            [' ', ' ', '*', ' '],
            [' ', ' ', ' ', ' '],
            ['*', ' ', ' ', ' ']
        ]
    ) instanceof Array).toBe(true)
})

test('Test #02', () => {
    expect(
        revealSabotage([
            ['*', ' ', ' ', ' '],
            [' ', ' ', '*', ' '],
            [' ', ' ', ' ', ' '],
            ['*', ' ', ' ', ' ']
        ])
    ).toStrictEqual(
        [
            [
                "*",
                "2",
                "1",
                "1"
            ],
            [
                "1",
                "2",
                "*",
                "1"
            ],
            [
                "1",
                "2",
                "1",
                "1"
            ],
            [
                "*",
                "1",
                " ",
                " "
            ]
        ]
    )
})

test('Test #03', () => {
    expect(
        revealSabotage([
            [' ', ' ', ' '],
            [' ', '*', ' '],
            [' ', ' ', ' ']
        ])
    ).toStrictEqual(
        [
            [
                "1",
                "1",
                "1"
            ],
            [
                "1",
                "*",
                "1"
            ],
            [
                "1",
                "1",
                "1"
            ]
        ]
    )
})

test('Test #04', () => {
    expect(
        revealSabotage([
            ['*', ' ', ' '],
            [' ', '*', ' '],
            [' ', ' ', '*']
        ])
    ).toStrictEqual(
        [
            [
                "*",
                "2",
                "1"
            ],
            [
                "2",
                "*",
                "2"
            ],
            [
                "1",
                "2",
                "*"
            ]
        ]
    )
})

test('Test #05', () => {
    expect(
        revealSabotage([
            ['*', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ])
    ).toStrictEqual(
        [
            [
                "*",
                "1",
                " "
            ],
            [
                "1",
                "1",
                " "
            ],
            [
                " ",
                " ",
                " "
            ]
        ]
    )
})

test('Test #06', () => {
    expect(
        revealSabotage([
            ['*', '*', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*']
        ])
    ).toStrictEqual(
        [
            [
                "*",
                "*",
                "*"
            ],
            [
                "*",
                "8",
                "*"
            ],
            [
                "*",
                "*",
                "*"
            ]
        ]
    )
})

test('Test #07', () => {
    expect(
        revealSabotage([
            ['*', ' ', '*']
        ])
    ).toStrictEqual(
        [
            [
                "*",
                "2",
                "*"
            ]
        ]
    )
})

test('Test #08', () => {
    expect(
        revealSabotage([
            ['*', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', '*']
        ])
    ).toStrictEqual(
        [
            [
                "*",
                "1",
                " "
            ],
            [
                "1",
                "2",
                "1"
            ],
            [
                " ",
                "1",
                "*"
            ]
        ]
    )
})

test('Test #09', () => {
    expect(
        revealSabotage([
            ['*', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', '*', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', '*']
        ])
    ).toStrictEqual(
        [
            [
                "*",
                "1",
                " ",
                " ",
                " "
            ],
            [
                "1",
                "2",
                "1",
                "1",
                " "
            ],
            [
                " ",
                "1",
                "*",
                "1",
                " "
            ],
            [
                " ",
                "1",
                "1",
                "2",
                "1"
            ],
            [
                " ",
                " ",
                " ",
                "1",
                "*"
            ]
        ]
    )
})