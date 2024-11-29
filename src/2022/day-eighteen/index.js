export function dryNumber(dry, numbers) {
  let result = Array.from(Array(numbers + 1)
    .keys()).slice(1)
    .filter(i => i.toString()
    .includes(dry));
  return result;
}
