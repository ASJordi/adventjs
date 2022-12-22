const checkStepNumbers = require('../src/day-twenty-two/index.js');

test("return type", () => {
  let res = checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]);
  expect(typeof res).toBe('boolean');
});

test("checkStepNumbers()", () =>{
  let res = checkStepNumbers(
    ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],
    [1, 33, 10, 2, 44, 20]
  );
  expect(res).toEqual(true);
});

test("checkStepNumbers()", () =>{
  let res = checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]);
  expect(res).toEqual(false);
});

test("checkStepNumbers()", () =>{
  let res = checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10]);
  expect(res).toEqual(true);
});

test("checkStepNumbers()", () =>{
  let res = checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6]);
  expect(res).toEqual(false);
});