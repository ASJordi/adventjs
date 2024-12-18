import { expect, test } from 'vitest';
import { findInAgenda } from "../../src/2024/day-eighteen/index.js";

test('Test #01 - Return type', () => {
    expect(typeof findInAgenda(
        "+34-600-123-456 Calle Gran Via 12 <Juan Perez> Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654 <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York", "34-600-123-456"
    )).toBe("object")
})

test('Test #02', () => {
    expect(findInAgenda(
        '+34-600-123-456 Calle Gran Via 12 <Juan Perez>\n' +
        'Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n' +
        '<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York',
        "34-600-123-456"
        )).toStrictEqual(
        {
            "name": "Juan Perez",
            "address": "Calle Gran Via 12"
        }
    )
})

test('Test #03', () => {
    expect(findInAgenda(
        '+34-600-123-456 Calle Gran Via 12 <Juan Perez>\n' +
        'Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n' +
        '<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York',
        "600-987"
        )).toStrictEqual(
        {
            "name": "Maria Gomez",
            "address": "Plaza Mayor 45 Madrid 28013"
        }
    )
})

test('Test #04', () => {
    expect(findInAgenda(
        '+34-600-123-456 Calle Gran Via 12 <Juan Perez>\n' +
        'Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n' +
        '<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York',
        "111"
    )).toStrictEqual(null)
})

test('Test #05', () => {
    expect(findInAgenda(
        '+34-600-123-456 Calle Gran Via 12 <Juan Perez>\n' +
        'Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n' +
        '<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York',
        "1"
    )).toEqual(null)
})