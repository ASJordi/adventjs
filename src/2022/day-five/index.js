export function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return Math.max(
    ...giftsCities
      .reduce(
        (acc, giftsCities) =>
          acc.concat(acc.map((e) => [giftsCities].concat(e))),
        [[]]
      )
      .filter(
        (solution) =>
          solution.length <= maxCities &&
          solution.reduce((acc, gifts) => (acc += gifts), 0) <= maxGifts &&
          true
      )
      .map((solution) => solution.reduce((acc, b) => acc + b, 0))
  );
}
