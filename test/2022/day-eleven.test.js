const getCompleted = require('../../src/2022/day-eleven/index.js');

test('return type', () => {
  expect(typeof (getCompleted('01:00:00', '03:00:00'))).toBe("string")
});

test("getCompleted()", () => {
  let res = getCompleted('01:00:00', '03:00:00');
  expect(res).toEqual('1/3');
});

test("getCompleted()", () => {
  let res = getCompleted('02:00:00', '04:00:00');
  expect(res).toEqual('1/2');
});

test("getCompleted()", () => {
  let res = getCompleted('01:00:00', '01:00:00');
  expect(res).toEqual('1/1');
});

test("getCompleted()", () => {
  let res = getCompleted('00:10:00', '01:00:00');
  expect(res).toEqual('1/6');
});

test("getCompleted()", () => {
  let res = getCompleted('01:10:10', '03:30:30');
  expect(res).toEqual('1/3');
});

test("getCompleted()", () => {
  let res = getCompleted('02:20:20', '03:30:30');
  expect(res).toEqual('2/3');
});

test("getCompleted()", () => {
  let res = getCompleted('03:30:30', '05:50:50');
  expect(res).toEqual('3/5');
});
