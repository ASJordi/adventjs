import { expect, test } from 'vitest';
import { drawTable } from "../../src/2024/day-fifteen/index.js";

test('Test #01 - Return type', () => {
    expect(typeof drawTable([{ name: 'Alice', city: 'London' }])).toBe("string")
})

test('Test #02', () => {
    expect(drawTable([{ name: 'Alice', city: 'London' }])).toStrictEqual(
        "+-------+--------+\n" +
        "| Name  | City   |\n" +
        "+-------+--------+\n" +
        "| Alice | London |\n" +
        "+-------+--------+"
    )
})

test('Test #03', () => {
    expect(drawTable([
        { name: 'Alice', city: 'London' },
        { name: 'Bob', city: 'Paris' }
    ])).toStrictEqual(
        "+-------+--------+\n" +
        "| Name  | City   |\n" +
        "+-------+--------+\n" +
        "| Alice | London |\n" +
        "| Bob   | Paris  |\n" +
        "+-------+--------+"
    )
})

test('Test #04', () => {
    expect(drawTable([
        { gift: 'Doll', quantity: 10 },
        { gift: 'Book', quantity: 5 },
        { gift: 'Music CD', quantity: 1 }
    ])).toStrictEqual(
        "+----------+----------+\n" +
        "| Gift     | Quantity |\n" +
        "+----------+----------+\n" +
        "| Doll     | 10       |\n" +
        "| Book     | 5        |\n" +
        "| Music CD | 1        |\n" +
        "+----------+----------+"
    )
})

test('Test #05', () => {
    expect(drawTable([
        { id: 1, score: 95 },
        { id: 2, score: 85 }
    ])).toStrictEqual(
        "+----+-------+\n" +
        "| Id | Score |\n" +
        "+----+-------+\n" +
        "| 1  | 95    |\n" +
        "| 2  | 85    |\n" +
        "+----+-------+"
    )
})

test('Test #06', () => {
    expect(drawTable([
        { id: 'midugato', isCat: true },
        { id: 'miduperro', isCat: false }
    ])).toStrictEqual(
        "+-----------+-------+\n" +
        "| Id        | IsCat |\n" +
        "+-----------+-------+\n" +
        "| midugato  | true  |\n" +
        "| miduperro | false |\n" +
        "+-----------+-------+"
    )
})

test('Test #07', () => {
    expect(drawTable([
        { game: 'indianajones', subtitle: 'the game' },
        { game: 'pokemonblue', subtitle: '' }
    ])).toStrictEqual(
        "+--------------+----------+\n" +
        "| Game         | Subtitle |\n" +
        "+--------------+----------+\n" +
        "| indianajones | the game |\n" +
        "| pokemonblue  |          |\n" +
        "+--------------+----------+"
    )
})