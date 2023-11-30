const getMaxGifts = require('../../src/2022/day-five/index.js');

test("return type", () => {
  const giftsCities = [12, 3, 11, 5, 7]
  const maxGifts = 20
  const maxCities = 3
  let res = getMaxGifts(giftsCities, maxGifts, maxCities);
  expect(typeof res).toBe('number');
});

test("getMaxGifts()", () => {
  let res = getMaxGifts([12, 3, 11, 5, 7], 20, 3);
  expect(res).toEqual(20);
});

test("getMaxGifts()", () => {
  let res = getMaxGifts([50], 15, 1);
  expect(res).toEqual(0);
});

test("getMaxGifts()", () => {
  let res = getMaxGifts([50], 100, 1);
  expect(res).toEqual(50);
});

test("getMaxGifts()", () => {
  let res = getMaxGifts([50, 70], 100, 1);
  expect(res).toEqual(70);
});

test("getMaxGifts()", () => {
  let res = getMaxGifts([50, 70, 30], 100, 2);
  expect(res).toEqual(100);
});

test("getMaxGifts()", () => {
  let res = getMaxGifts([50, 70, 30], 100, 3);
  expect(res).toEqual(100);
});

test("getMaxGifts()", () => {
  let res = getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4);
  expect(res).toEqual(100);
});

test("getMaxGifts()", () => {
  let res = getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000);
  expect(res).toEqual(115);
});
