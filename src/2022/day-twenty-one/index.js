export function printTable(gifts) {
  let quantityLength = Math.max(
    ...gifts.map((x) => (x.quantity + '').length),
    'Quantity'.length
  );

  let nameLength = Math.max(
    ...gifts.map((x) => x.name.length),
    'Gift'.length
  );

  let baseLength = nameLength + quantityLength + 7;

  let result = `${'+'.repeat(baseLength)}\n| ${'Gift'.padEnd(
    nameLength
  )} | ${'Quantity'.padEnd(quantityLength)} |\n| ${'-'.repeat(
    nameLength
  )} | ${'-'.repeat(quantityLength)} |\n`;

  gifts.forEach(({ name, quantity }) => {
    result += `| ${name.padEnd(nameLength)} | ${(quantity + '').padEnd(
      quantityLength
    )} |\n`;
  });

  result += '*'.repeat(baseLength);

  return result;
}
