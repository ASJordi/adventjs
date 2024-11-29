import { expect, test } from 'vitest';
import { adjustLights } from "../../src/2023/day-nine/index.js";

test('Test #01 - Return a number', () => {
    expect(typeof adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toBe('number')
})

test('Test #02 - adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])', () => {
    expect(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])).toBe(1)
})

test('Test #03 - adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])', () => {
    expect(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])).toBe(2)
})

test('Test #04 - adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])', () => {
    expect(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])).toBe(0)
})

test('Test #05 - adjustLights(["🔴", "🔴", "🔴"])', () => {
    expect(adjustLights(["🔴", "🔴", "🔴"])).toBe(1)
})

