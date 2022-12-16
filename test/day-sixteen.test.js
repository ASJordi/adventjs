const fixLetter = require('../src/day-sixteen/index.js');

test("return type", () => {
  let res = fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `);
  expect(typeof res).toBe('string');
});

test("fixLetter()", () => {
  expect(
    fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
  ).toEqual("Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.")
});

test("fixLetter()", () => {
  expect(
    fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
  ).toEqual("Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?")
});

test("fixLetter()", () => {
  expect(
    fixLetter("  hi    santa    claus ")
  ).toEqual("Hi Santa Claus.")
});

test("fixLetter()", () => {
  expect(
    fixLetter("  hi    santa    claus . santa claus is the best  ")
  ).toEqual("Hi Santa Claus. Santa Claus is the best.")
});

test("fixLetter()", () => {
  expect(
    fixLetter("  hi    santa    claus . are you there???")
  ).toEqual("Hi Santa Claus. Are you there?")
});

test("fixLetter()", () => {
  expect(
    fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! ")
  ).toEqual("Hey Santa Claus. I want a bike. I want a videogame!")
});