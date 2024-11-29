import { expect, test } from 'vitest';
import { selectSleigh } from "../../src/2022/day-twelve/index.js";

test('return type', () => {
  expect(typeof (selectSleigh(1, [{ name: 'pheralb', consumption: 0.3 },{ name: 'TMChein', consumption: 0.5 }])
  )).toBe("string");
});

test("selectSleigh()", () => {
  let res = selectSleigh(1, [
    { name: 'pheralb', consumption: 0.3 },
    { name: 'TMChein', consumption: 0.5 }
  ]);
  expect(res).toEqual('TMChein');
});

test("selectSleigh()", () => {
  let res = selectSleigh(10, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 5 }
  ]);
  expect(res).toEqual('Pedrosillano');
});

test("selectSleigh()", () => {
  let res = selectSleigh(10, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
  ]);
  expect(res).toEqual('SamarJaffal');
});

test("return null", () => {
  let res = selectSleigh(50, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
  ]);
  expect(res).toEqual(null);
});
