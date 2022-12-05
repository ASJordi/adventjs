const fitsInOneBox = require('../src/day-four/index.js');

test("return type", () => {
  let res = fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }]);
  expect(typeof res).toBe('boolean');
});

test("fitsInOneBox()", () => {
  const res = fitsInOneBox([
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
  ]);
  expect(res).toEqual(false);
});

test("fitsInOneBox()", () => {
  const res = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ]);  
  expect(res).toEqual(true);
});

test("fitsInOneBox()", () => {
  const res = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]);
  expect(res).toEqual(false);
});

test("fitsInOneBox()", () => {
  const res = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2}
  ]);
  expect(res).toEqual(false);
});

test("fitsInOneBox()", () => {
  const res = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]);
  expect(res).toEqual(true);
});

test("fitsInOneBox()", () => {
  const res = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]);
  expect(res).toEqual(false);
});