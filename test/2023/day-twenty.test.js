const distributeGifts = require('../../src/2023/day-twenty/index.js')

test('Test #01 - Returns an array', () => {
    expect(distributeGifts(
        [
            [4, 5, 1],
            [6, null, 3],
            [8, null, 4]
        ]
    ) instanceof Array).toBe(true)
})

test('Test #02', () => {
    expect(distributeGifts([
        [4, 5, 1],
        [6, null, 3],
        [8, null, 4]
    ])).toStrictEqual(
        [
            [
                5,
                3,
                3
            ],
            [
                6,
                5,
                3
            ],
            [
                7,
                6,
                4
            ]
        ]
    )
})

test('Test #03', () => {
    expect(distributeGifts([
        [2, null],
        [null, 3]
    ])).toStrictEqual(
        [
            [
                2,
                3
            ],
            [
                3,
                3
            ]
        ]
    )
})

test('Test #04', () => {
    expect(distributeGifts([
        [2, 1, 1],
        [3, 4, null]
    ])).toStrictEqual(
        [
            [
                2,
                2,
                1
            ],
            [
                3,
                3,
                3
            ]
        ]
    )
})

test('Test #05', () => {
    expect(distributeGifts([
        [null, 5],
        [3, null]
    ])).toStrictEqual(
        [
            [
                4,
                5
            ],
            [
                3,
                4
            ]
        ]
    )
})

test('Test #06', () => {
    expect(distributeGifts([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])).toStrictEqual(
        [
            [
                2,
                3,
                4
            ],
            [
                4,
                5,
                6
            ],
            [
                6,
                7,
                8
            ]
        ]
    )
})

test('Test #07', () => {
    expect(distributeGifts([
        [null, 1, null, 1, null],
        [1, null, 1, null, 1],
    ])).toStrictEqual(
        [
            [
                1,
                1,
                1,
                1,
                1
            ],
            [
                1,
                1,
                1,
                1,
                1
            ]
        ]
    )
})