import { expect, test } from 'vitest';
import { decorateTree } from "../../src/2022/day-fifteen/index.js";

test("return type", () =>{
  let res = decorateTree('B P R P');
  expect(res instanceof Array).toBe(true);
});

test("decorateTree()", () => {
  let res = decorateTree('B P R P');
  expect(res).toEqual([
    "R",
    "P B",
    "R B B",
    "B P R P"
  ]);
});

test("decorateTree()", () => {
  let res = decorateTree('B B');
  expect(res).toEqual([
    "B",
    "B B"
  ]);
});

test("decorateTree()", () => {
  let res = decorateTree('B B P R P R R');
  expect(res).toEqual([
    "B",
    "R P",
    "B P P",
    "P R B R",
    "P P B B P",
    "B R B B B R",
    "B B P R P R R"
  ]);
});

test("decorateTree()", () => {
  let res = decorateTree('R R P R R');
  expect(res).toEqual([
    "R",
    "R R",
    "P B P",
    "R B B R",
    "R R P R R"
  ]);
});
