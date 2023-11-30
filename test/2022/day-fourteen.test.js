const getOptimalPath = require('../../src/2022/day-fourteen/index.js');

test("return type", () =>{
  let res = getOptimalPath([[0], [7, 4], [2, 4, 6]]);
  expect(typeof res).toBe('number');
});

test("getOptimalPath()", () => {
  let res = getOptimalPath([[0], [7, 4], [2, 4, 6]]);
  expect(res).toEqual(8);
});

test("getOptimalPath()", () => {
  let res = getOptimalPath([[0], [2, 3]]);
  expect(res).toEqual(2);
});

test("getOptimalPath()", () => {
  let res = getOptimalPath([[0], [3, 4], [9, 8, 1]]);
  expect(res).toEqual(5);
});

test("getOptimalPath()", () => {
  let res = getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]);
  expect(res).toEqual(8);
});

test("getOptimalPath()", () => {
  let res = getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]]);
  expect(res).toEqual(7);
});
