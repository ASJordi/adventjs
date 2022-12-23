const executeCommands = require("../src/day-twenty-three/index.js");

test("return type", () => {
  let res = executeCommands([
    "MOV 5,V00",
    "MOV 10,V01",
    "DEC V00",
    "ADD V00,V01",
  ]);
  expect(res instanceof Array).toBe(true);
});

test("executeCommands()", () => {
  let res = executeCommands([
    "MOV 5,V00",
    "MOV 10,V01",
    "DEC V00",
    "ADD V00,V01",
  ]);
  expect(res).toEqual([14, 10, 0, 0, 0, 0, 0, 0]);
});

test("executeCommands()", () => {
  let res = executeCommands(["MOV 255,V00", "INC V00", "DEC V01", "DEC V01"]);
  expect(res).toEqual([0, 254, 0, 0, 0, 0, 0, 0]);
});

test("executeCommands()", () => {
  let res = executeCommands([
    "MOV 10,V00",
    "DEC V00",
    "INC V01",
    "JMP 1",
    "INC V06",
  ]);
  expect(res).toEqual([0, 10, 0, 0, 0, 0, 1, 0]);
});

test("executeCommands()", () => {
  let res = executeCommands([
    "MOV 10,V00",
    "MOV V00,V01",
    "MOV V01,V02",
    "MOV V02,V03",
    "MOV V03,V04",
  ]);
  expect(res).toEqual([10, 10, 10, 10, 10, 0, 0, 0]);
});
