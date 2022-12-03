function distributeGifts(packOfGifts, reindeers) {
  const packWeight = packOfGifts.reduce((total, word) => total + word.length, 0);
  const reindeersWeight = reindeers.reduce((total, word) => total + word.length * 2, 0);
  return Math.floor(reindeersWeight / packWeight);
}

module.exports = distributeGifts;