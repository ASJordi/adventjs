function checkJump(heights) {
  const sideLeft = heights.splice(0, heights.indexOf(Math.max(...heights)));
  const conditionLeft = sideLeft.slice(1).every((l, i) => l >= sideLeft[i]);
  const conditionRight = heights.slice(1).every((h, i) => h <= heights[i]);
  return conditionLeft && conditionRight && !!sideLeft.length && heights.length > 1;
}

module.exports = checkJump;