import { expect, test } from 'vitest';
import { checkJump } from "../../src/2022/day-ten/index.js";

test('return type', () => {
  expect(typeof (checkJump([1, 2, 1]))).toBe("boolean")
});

test('checkJump([1, 2, 1])', () => {
  expect(checkJump([1, 2, 1])).toBe(true)
});

test('checkJump([1, 3, 8, 5, 2])', () => {
  expect(checkJump([1, 3, 8, 5, 2])).toBe(true)
});

test('checkJump([1, 7, 3, 5])', () => {
  expect(checkJump([1, 7, 3, 5])).toBe(false)
});

test('checkJump([1, 2, 3, 2, 1])', () => {
  expect(checkJump([1, 2, 3, 2, 1])).toBe(true)
});

test('checkJump([1, 2, 2, 2, 1])', () => {
  expect(checkJump([1, 2, 2, 2, 1])).toBe(true)
});

test('checkJump([0, 1, 0])', () => {
  expect(checkJump([0, 1, 0])).toBe(true)
});

test('checkJump([2, 2, 2, 2])', () => {
  expect(checkJump([2, 2, 2, 2])).toBe(false)
});

test('checkJump([1, 2, 3])', () => {
  expect(checkJump([1, 2, 3])).toBe(false)
});

test('checkJump([1, 2, 3, 2, 1, 2, 3])', () => {
  expect(checkJump([1, 2, 3, 2, 1, 2, 3])).toBe(false)
});

test('checkJump([1, 1000, 900, 800])', () => {
  expect(checkJump([1, 1000, 900, 800])).toBe(true)
});

test('checkJump([1, 1000, 100, 800])', () => {
  expect(checkJump([1, 1000, 100, 800])).toBe(false)
});

test('checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])', () => {
  expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBe(true)
});

test('checkJump([1, 2, 3, 1, 3, 1])', () => {
  expect(checkJump([1, 2, 3, 1, 3, 1])).toBe(false)
});

test('checkJump([1, 3, 2, 5, 4, 3, 2, 1])', () => {
  expect(checkJump([1, 3, 2, 5, 4, 3, 2, 1])).toBe(false)
});
