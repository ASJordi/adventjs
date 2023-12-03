const findNaughtyStep = require('../../src/2023/day-three/index.js')

test('Test #01 - Returns a String', () => {
    expect(
        typeof findNaughtyStep('abcd', 'abcde')
    ).toBe("string")
})

test('Test #2 - findNaughtyStep(\'abcd\', \'abcde\')', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toStrictEqual('e')
})

test('Test #3 - findNaughtyStep(\'xxxx\', \'xxoxx\')', () => {
    expect(findNaughtyStep('xxxx', 'xxoxx')).toStrictEqual('o')
})

test('Test #4 - findNaughtyStep(\'stepfor\', \'stepor\')', () => {
    expect(findNaughtyStep('stepfor', 'stepor')).toStrictEqual('f')
})

test('Test #5 - findNaughtyStep(\'iiiii\', \'iiiii\')', () => {
    expect(findNaughtyStep('iiiii', 'iiiii')).toStrictEqual('')
})