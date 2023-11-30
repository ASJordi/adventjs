function selectSleigh(distance, sleighs) {
  let sleighsList = sleighs.filter(x => (20 / x.consumption) >= distance).at(-1)
  return sleighsList == null ? null : sleighsList.name
}

module.exports = selectSleigh;