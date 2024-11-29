import { expect, test } from 'vitest';
import { printTable } from "../../src/2022/day-twenty-one/index.js";

test("return type", () => {
  let res = printTable([{ name: 'Game', quantity: 10000 }]);
  expect(typeof res).toBe('string');
});

test("printTable()", () =>{
  let res = printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
  ]);
  expect(res).toEqual("++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************")
});

test("printTable()", () =>{
  let res = printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
  ]);
  expect(res).toEqual("+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************")
});

test("printTable()", () =>{
  let res = printTable([
    { name: 'Game', quantity: 10000 }
  ]);
  expect(res).toEqual("+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************")
});

test("printTable()", () =>{
  let res = printTable([
    { name: 'Game', quantity: 1234567890 }
  ]);
  expect(res).toEqual("+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************")
});

test("printTable()", () =>{
  let res = printTable([
    { name: 'Toy', quantity: 12 },
    { name: 'Mic', quantity: 123 }
  ]);
  expect(res).toEqual("+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************")
});
