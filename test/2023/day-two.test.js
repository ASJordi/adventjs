import { expect, test } from 'vitest';
import { manufacture } from "../../src/2023/day-two/index.js";

test('Test #01 - Returns an array', () => {
    const gifts = ['tren', 'oso', 'pelota']
    const materials = 'tronesa'
    let res = manufacture(gifts, materials)
    expect(res instanceof Array).toBe(true)
})

test("Test #02 - manufacture(['tren', 'oso', 'pelota'], 'tronesa')", () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toStrictEqual([
        "tren",
        "oso"
    ])
})

test('Test #03 - manufacture([\'coche\', \'muñeca\', \'balon\'], \'ocmuñalb\')\n', () => {
    expect( manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')).toStrictEqual(
        []
    )
})

test('Test #03 - manufacture([\'patineta\', \'robot\', \'libro\'], \'nopor\')', () => {
    expect(manufacture(['patineta', 'robot', 'libro'], 'nopor')).toStrictEqual(
        []
    )
})

test('Test #05 - manufacture([], \'letras\')', () => {
    expect(manufacture([], 'letras')).toStrictEqual(
        []
    )
})