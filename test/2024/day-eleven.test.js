import { expect, test } from 'vitest';
import { decodeFilename } from "../../src/2024/day-eleven/index.js";

test('Test #01 - Return type', () => {
    expect(typeof decodeFilename("2023122512345678_sleighDesign.png.grinchwa")).toBe("string")
})

test('Test #02', () => {
    expect(decodeFilename("2023122512345678_sleighDesign.png.grinchwa")).toStrictEqual("sleighDesign.png")
})

test('Test #03', () => {
    expect(decodeFilename("42_chimney_dimensions.pdf.hack2023")).toStrictEqual("chimney_dimensions.pdf")
})

test('Test #04', () => {
    expect(decodeFilename("987654321_elf-roster.csv.tempfile")).toStrictEqual("elf-roster.csv")
})

test('Test #05', () => {
    expect(decodeFilename("2024120912345678_magic_wand-blueprint.jpg.grinchbackup")).toStrictEqual("magic_wand-blueprint.jpg")
})

test('Test #06', () => {
    expect(decodeFilename("51231_trainSchedule.txt.extra")).toStrictEqual("trainSchedule.txt")
})