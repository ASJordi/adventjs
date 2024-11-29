export function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames.every((el, i) => stepNumbers[i] <= stepNumbers[
    i + systemNames.slice(i + 1).indexOf(el) + 1
  ]);
}
