import { expect, test } from 'vitest';
import { organizeInventory } from "../../src/2024/day-three/index.js";

test('Test #01 - Return type', () => {
    expect(typeof organizeInventory([])).toBe('object');
})

test('Test #02 - organizeInventory([])', () => {
    expect(organizeInventory([])).toStrictEqual(
        {}
    );
})

test('Test #03 - organizeInventory([{ name: "doll", quantity: 5, category: "toys" }])', () => {
    expect(organizeInventory([{ name: "doll", quantity: 5, category: "toys" }])).toStrictEqual(
        {
            "toys": {
                "doll": 5
            }
        }
    )
})

test('Test #04', () => {
    expect(
        organizeInventory([{ name: "book", quantity: 10, category: "education" }, { name: "book", quantity: 5, category: "education" }, { name: "paint", quantity: 3, category: "art" }])
    ).toStrictEqual(
        {
            "education": {
                "book": 15
            },
            "art": {
                "paint": 3
            }
        }
    )
})

test('Test #0', () => {
    expect(
        organizeInventory([{ name: "doll", quantity: 5, category: "toys" }, { name: "car", quantity: 3, category: "toys" }, { name: "ball", quantity: 2, category: "sports" }, { name: "car", quantity: 2, category: "toys" }, { name: "racket", quantity: 4, category: "sports" }])
    ).toStrictEqual(
        {
            "toys": {
                "doll": 5,
                "car": 5
            },
            "sports": {
                "ball": 2,
                "racket": 4
            }
        }
    )
})