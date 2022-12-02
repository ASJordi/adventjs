const wrapping = require("../src/day-one/index.js");

test("return type", () =>{
  let gifts = ["tablet", "b", "c"];
  let wrapped = wrapping(gifts);
  expect(wrapped instanceof Array).toBe(true);
  // expect(wrapped).toBeInstanceOf(Array);
});

test("wrapping(gifts)", () =>{
  let gifts = ["book", "game", "socks"];
  let wrapped = wrapping(gifts);
  expect(wrapped).toEqual([
    "******\n*book*\n******",
    "******\n*game*\n******",
    "*******\n*socks*\n*******"
  ])
});

test("wrapping(midu)", () =>{
  let gifts = ["midu"];
  let wrapped = wrapping(gifts);
  expect(wrapped).toEqual([
    "******\n*midu*\n******"
  ])
});

test("wrapping(a)", () =>{
  let gifts = ["a"];
  let wrapped = wrapping(gifts);
  expect(wrapped).toEqual([
    "***\n*a*\n***"
  ])
});

test("wrapping an empty array should return an empty array", () =>{
  let gifts = [];
  let wrapped = wrapping(gifts);
  expect(wrapped).toEqual([
  ])
});