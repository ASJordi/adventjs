const getFilesToBackup = require('../src/day-thirteen/index.js');

test("return type", () =>{
  let res = getFilesToBackup(1546300800, [
    [ 1, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ],
    [ 3, 1546301100 ]
  ]);
  expect(res instanceof Array).toBe(true);
});

test("getFilesToBackup()", () => {
  let res = getFilesToBackup(1546300800, [
    [ 1, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ],
    [ 3, 1546301100 ]
  ]);
  expect(res).toEqual([1,3]);
});

test("getFilesToBackup()", () => {
  let res = getFilesToBackup(1546300600, [
    [ 1, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ],
    [ 3, 1546301100 ]
  ]);
  expect(res).toEqual([1,2,3]);
});

test("getFilesToBackup()", () => {
  let res = getFilesToBackup(1556300600, [
    [ 1, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ],
    [ 3, 1546301100 ]
  ]);
  expect(res).toEqual([]);
});

test("getFilesToBackup()", () => {
  let res = getFilesToBackup(1556300600, []);
  expect(res).toEqual([]);
});