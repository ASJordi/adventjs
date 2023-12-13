const calculateTime = require('../../src/2023/day-thirteen/index.js')

test('Test #01 - Return a String', () => {
    expect(typeof calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe('string')
})

test('Test #02', () => {
    expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toStrictEqual("-02:20:00")
})

test('Test #03', () => {
    expect(calculateTime(['01:00:00', '05:00:00', '00:30:00'])).toStrictEqual("-00:30:00")
})

test('Test #04', () => {
    expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toStrictEqual("00:30:00")
})

test('Test #05', () => {
    expect(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])).toStrictEqual("-05:29:00")
})

test('Test #06', () => {
    expect(calculateTime(['02:00:00', '03:00:00', '02:00:00'])).toStrictEqual("00:00:00")
})

test('Test #07', () => {
    expect(calculateTime(['01:01:01', '09:59:59', '01:01:01'])).toStrictEqual("05:02:01")
})

test('Test #08', () => {
    expect(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])).toStrictEqual("-00:00:01")
})