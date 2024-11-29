import { expect, test } from 'vitest';
import { canExit } from "../../src/2022/day-twenty-four/index.js";

test('return type', () => {
  let res = canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ]);
  expect(typeof (res)).toBe("boolean")
});

test("canExit()", () => {
  let res = canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ]);
  expect(res).toEqual(true);
});

test("canExit()", () => {
  let res = canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ]);
  expect(res).toEqual(false);
});

test("canExit()", () => {
  let res = canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', ' ', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ]);
  expect(res).toEqual(false);
});

test("canExit()", () => {
  let res = canExit([
    ['E', ' ', ' ', ' ', 'S']
  ]);
  expect(res).toEqual(true);
});

test("canExit()", () => {
  let res = canExit([
    ['E', ' ', 'W', ' ', 'S']
  ]);
  expect(res).toEqual(false);
});

test("canExit()", () => {
  let res = canExit([
    ['E', ' ', 'W', ' ', 'S']
  ]);
  expect(res).toEqual(false);
});

test("canExit()", () => {
  let res = canExit([
    ['E', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
  ])
  ;
  expect(res).toEqual(true);
});

test("canExit()", () => {
  let res = canExit([
    ['E', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    ['W', 'W', 'W', 'W', 'W'],
  ]);
  expect(res).toEqual(true);
});

test("canExit()", () => {
  let res = canExit([
    ['E', ' ', 'W', ' ', 'S'],
    [' ', ' ', 'W', ' ', ' '],
    ['W', 'W', 'W', 'W', 'W'],
  ]);
  expect(res).toEqual(false);
});

test("canExit()", () => {
  let res = canExit([
    ['E', 'S', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W']
  ]);
  expect(res).toEqual(true);
});
