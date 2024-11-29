export function countTime(leds) {
  const ledString = leds.join('');
  const ledRowsOff = ledString.split('1');
  ledRowsOff[0] += ledRowsOff.pop();
  return ledRowsOff.reduce((maxTime, rowOff) => {
    return Math.max(maxTime, rowOff.length * 7);
  }, 0);
}
