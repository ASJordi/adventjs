import { expect, test } from 'vitest';
import { sortToys } from "../../src/2022/day-nineteen/index.js";

test("return type", () =>{
  let res = sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]);
  expect(res instanceof Array).toBe(true);
});

test("sortToys()", () =>{
  let res = sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]);
  expect(res).toEqual([
    "puzzle",
    "car",
    "ball",
    "doll"
  ]);
});

test("sortToys()", () =>{
  let res = sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4]);
  expect(res).toEqual([
    "ps4",
    "xbox",
    "switch",
    "pc",
    "nintendo"
  ]);
});

test("sortToys()", () =>{
  let res = sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9]);
  expect(res).toEqual([
    "ps4",
    "xbox",
    "switch",
    "pc",
    "nintendo"
  ]);
});

test("sortToys()", () =>{
  let res = sortToys(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'], [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]);
  expect(res).toEqual([
    "l",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "j",
    "k"
  ]);
});
