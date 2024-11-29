import { expect, test } from 'vitest';
import { countHours} from "../../src/2022/day-two/index.js";

test("return type", () => {
  const year = 2022;
  const holidays = ['01/06', '04/01', '12/25'];
  let hours = countHours(year, holidays);
  expect(typeof hours).toBe('number');
});

test("countHours()", () => {
  let hours = countHours(2023, ['01/06', '04/01', '12/25']);
  expect(hours).toEqual(4);
});

test("countHours()", () => {
  let hours = countHours(2022, ['01/06', '04/01', '12/25']);
  expect(hours).toEqual(4);
});

test("countHours()", () => {
  let hours = countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']);
  expect(hours).toEqual(10);
});

test("countHours()", () => {
  let hours = countHours(2000, ['01/01']);
  expect(hours).toEqual(0);
});

test("countHours()", () => {
  let hours = countHours(2022, ['12/31']);
  expect(hours).toEqual(0);
});
