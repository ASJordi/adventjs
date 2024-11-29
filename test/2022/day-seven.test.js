import { expect, test } from 'vitest';
import { getGiftsToRefill } from "../../src/2022/day-seven/index.js";

test("return type", () => {
  let res = getGiftsToRefill([], [], []);
  expect(res).toBeInstanceOf(Array);
});

test("getGiftsToRefill", () => {
  const a1 = ['bike', 'car', 'bike', 'bike']
  const a2 = ['car', 'bike', 'doll', 'car']
  const a3 = ['bike', 'pc', 'pc']
  let res = getGiftsToRefill(a1, a2, a3);
  expect(res).toEqual(["doll", "pc"]);
});

test("return an empty Array", () => {
  let res = getGiftsToRefill([], [], []);
  expect(res).toEqual([]);
});

test("getGiftsToRefill", () => {
  let res = getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a']);
  expect(res).toEqual([]);
});

test("getGiftsToRefill", () => {
  let res = getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c']);
  expect(res).toEqual(["a", "b", "c"]);
});

test("getGiftsToRefill", () => {
  let res = getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f']);
  expect(res).toEqual(["a", "b", "c", "d", "e", "f"]);
});
