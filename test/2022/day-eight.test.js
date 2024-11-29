import { expect, test } from 'vitest';
import { checkPart} from "../../src/2022/day-eight/index.js";

test("return type", () => {
  expect(typeof checkPart('uwu')).toBe('boolean');
});

test("checkPart('uwu')", () => {
  expect(checkPart('uwu')).toBe(true);
});

test("checkPart('midu')", () => {
  expect(checkPart('midu')).toBe(false);
});

test("checkPart('lolol')", () => {
  expect(checkPart('lolol')).toBe(true);
});

test("checkPart('yolooloy')", () => {
  expect(checkPart("yolooloy")).toBe(true);
});

test("checkPart('zzzoonzzz')", () => {
  expect(checkPart("zzzoonzzz")).toBe(true);
});
