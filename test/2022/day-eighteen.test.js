import { expect, test } from 'vitest';
import { dryNumber} from "../../src/2022/day-eighteen/index.js";

test("return type", () =>{
  let res = dryNumber(1, 15);
  expect(res instanceof Array).toBe(true);
});

test("dryNumber()", () =>{
  let res = dryNumber(1, 15);
  expect(res).toEqual([
    1,
    10,
    11,
    12,
    13,
    14,
    15
  ]);
});

test("dryNumber()", () =>{
  let res = dryNumber(2, 20);
  expect(res).toEqual([
    2,
    12,
    20
  ]);
});

test("dryNumber()", () =>{
  let res = dryNumber(3, 33);
  expect(res).toEqual([
    3,
    13,
    23,
    30,
    31,
    32,
    33
  ]);
});

test("dryNumber()", () =>{
  let res = dryNumber(4, 45);
  expect(res).toEqual([
    4,
    14,
    24,
    34,
    40,
    41,
    42,
    43,
    44,
    45
  ]);
});

test("dryNumber()", () =>{
  let res = dryNumber(5, 55);
  expect(res).toEqual([
    5,
    15,
    25,
    35,
    45,
    50,
    51,
    52,
    53,
    54,
    55
  ]);
});

test("dryNumber()", () =>{
  let res = dryNumber(9, 8);
  expect(res).toEqual([]);
});
