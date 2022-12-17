const carryGifts = require('../src/day-seventeen/index.js');

test("return type", () =>{
  let res = carryGifts(['game', 'bike', 'book', 'toy'], 10);
  expect(res instanceof Array).toBe(true);
});

test("carryGifts()", () => {
  let res = carryGifts(['game', 'bike', 'book', 'toy'], 10);
  expect(res).toEqual([
    "game bike",
    "book toy"
  ]);
});

test("carryGifts()", () => {
  let res = carryGifts(['game', 'bike', 'book', 'toy'], 7);
  expect(res).toEqual([
    "game",
    "bike",
    "book toy"
  ]);
});

test("carryGifts()", () => {
  let res = carryGifts(['game', 'bike', 'book', 'toy'], 4);
  expect(res).toEqual([
    "game",
    "bike",
    "book",
    "toy"
  ]);
});

test("carryGifts()", () => {
  let res = carryGifts(['toy', 'gamme', 'toy', 'bike'], 6);
  expect(res).toEqual([
    "toy",
    "gamme",
    "toy",
    "bike"
  ]);
});

test("carryGifts()", () => {
  let res = carryGifts(['toy', 'toy', 'toy', 'toy'], 2);
  expect(res).toEqual([]);
});

test("carryGifts()", () => {
  let res = carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7);
  expect(res).toEqual([
    "toy toy",
    "disk",
    "disk toy",
    "toy"
  ]);
});