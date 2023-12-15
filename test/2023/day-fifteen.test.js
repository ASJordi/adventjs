const autonomousDrive = require('../../src/2023/day-fifteen/index.js')

test('Test #01 - Returns an array', () => {
    const store = ['..!....', '...*.*.']
    const movements = ['R', 'R', 'D', 'L']
    const result = autonomousDrive(store, movements)
    expect(result instanceof Array).toBe(true)
})

test('Test #02', () => {
    expect(autonomousDrive(['..!....'], ['R', 'L'])).toStrictEqual(
        [
            "..!...."
        ]
    )
})

test('Test #03', () => {
    expect(autonomousDrive(['!..', '***'], ['U', 'L'])).toStrictEqual(
        [
            "!..",
            "***"
        ]
    )
})

test('Test #04', () => {
    expect(
        autonomousDrive(
            [
                '..!....',
                '......*'
            ],
            ['R', 'D', 'L'])
    ).toStrictEqual(
        [
            ".......",
            "..!...*"
        ]
    )
})

test('Test #05', () => {
    expect(
        autonomousDrive(
            [
                '*..!..*',
                '*.....*'
            ],
            ['R', 'R', 'R', 'D', 'D'])

    ).toStrictEqual(
        [
            "*.....*",
            "*....!*"
        ]

    )
})

test('Test #06', () => {
    expect(autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])).toStrictEqual(
        [
            "***",
            "..!",
            "***"
        ]
    )
})

test('Test #07', () => {
    expect(autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])).toStrictEqual(
        [
            "***",
            "*!*",
            "***"
        ]
    )
})

test('Test #08', () => {
    expect(
        autonomousDrive(
            [
                '.**.*.*.',
                '.***....',
                '..!.....'
            ], ['D', 'U', 'R', 'R', 'R'])
    ).toStrictEqual(
        [
            ".**.*.*.",
            ".***....",
            ".....!.."
        ]
    )
})