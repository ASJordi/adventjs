import { expect, test } from 'vitest';
import { drawGift } from "../../src/2023/day-seven/index.js";

test('Test #01 - Return a String', () => {
    expect(typeof drawGift(4, '+')).toBe('string');
})

test('Test #02 - drawGift(4, "+")', () => {
    const expectedOutput =
        "   ####\n" +
        "  #++##\n" +
        " #++#+#\n" +
        "####++#\n" +
        "#++#+#\n" +
        "#++##\n" +
        "####\n";
    expect(drawGift(4, "+")).toStrictEqual(expectedOutput)
})

test('Test #03 - drawGift(5, "*")', () =>{
    const expectedOutput =
        "    #####\n" +
        "   #***##\n" +
        "  #***#*#\n" +
        " #***#**#\n" +
        "#####***#\n" +
        "#***#**#\n" +
        "#***#*#\n" +
        "#***##\n" +
        "#####\n";
    expect(drawGift(5, "*")).toStrictEqual(expectedOutput)
})

test('Test #04 - drawGift(1, "^")', () => {
    const expectedOutput =
        "#\n";
    expect(drawGift(1, "^")).toStrictEqual(expectedOutput)
})

test('Test #05 - drawGift(2, "&")', () => {
    const expectedOutput =
        " ##\n" +
        "###\n" +
        "##\n";
    expect(drawGift(2, "&")).toStrictEqual(expectedOutput)
})

test('Test #06 - drawGift(10, "%")', () =>{
    const expectedOutput =
        "         ##########\n" +
        "        #%%%%%%%%##\n" +
        "       #%%%%%%%%#%#\n" +
        "      #%%%%%%%%#%%#\n" +
        "     #%%%%%%%%#%%%#\n" +
        "    #%%%%%%%%#%%%%#\n" +
        "   #%%%%%%%%#%%%%%#\n" +
        "  #%%%%%%%%#%%%%%%#\n" +
        " #%%%%%%%%#%%%%%%%#\n" +
        "##########%%%%%%%%#\n" +
        "#%%%%%%%%#%%%%%%%#\n" +
        "#%%%%%%%%#%%%%%%#\n" +
        "#%%%%%%%%#%%%%%#\n" +
        "#%%%%%%%%#%%%%#\n" +
        "#%%%%%%%%#%%%#\n" +
        "#%%%%%%%%#%%#\n" +
        "#%%%%%%%%#%#\n" +
        "#%%%%%%%%##\n" +
        "##########\n";
    expect(drawGift(10, "%")).toStrictEqual(expectedOutput)
})