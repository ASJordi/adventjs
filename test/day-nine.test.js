const countTime = require('../src/day-nine/index.js');

test("return type", () => {
  expect(typeof countTime([0, 1, 1, 0, 1])).toBe('number');
});

test("countTime()", () => {
  let res = countTime([0, 1, 1, 0, 1]);
  expect(res).toEqual(7);
});

test("countTime()", () => {
  let res = countTime([0, 0, 0, 1]);
  expect(res).toEqual(21);
});

test("countTime()", () => {
  let res = countTime([0, 0, 1, 0, 0]);
  expect(res).toEqual(28);
});

test("countTime()", () => {
  let res = countTime([1, 0, 0, 1, 0, 0]);
  expect(res).toEqual(14);
});

test("countTime()", () => {
  let res = countTime([1, 1, 0, 0, 0, 0]);
  expect(res).toEqual(28);
});

test("countTime()", () => {
  let res = countTime([1, 1, 1]);
  expect(res).toEqual(0);
});