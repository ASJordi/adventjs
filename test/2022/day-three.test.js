const distributeGifts = require('../../src/2022/day-three/index.js');

test("return type", () => {
  const packOfGifts = ["book", "doll", "ball"];
  const reindeers = ["dasher", "dancer"];
  let res = distributeGifts(packOfGifts, reindeers);
  expect(typeof res).toBe('number');
});

test("distributeGifts()", () => {
  const packOfGifts = ["book", "doll", "ball"];
  const reindeers = ["dasher", "dancer"];
  let res = distributeGifts(packOfGifts, reindeers);
  expect(res).toEqual(2);
});

test("distributeGifts()", () => {
  let res = distributeGifts(['a', 'b', 'c'], ['d', 'e']);
  expect(res).toEqual(1);
});

test("it should return 0 if reindeers can't carry any pack", () => {
  let res = distributeGifts(['videogames', 'console'], ['midu']);
  expect(res).toEqual(0);
});

test("distributeGifts()", () => {
  let res = distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']);
  expect(res).toEqual(5);
});

test("distributeGifts()", () => {
  let res = distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']);
  expect(res).toEqual(26);
});
