function checkStepNumbers(systemNames, stepNumbers) {

  let unionStepNumbers = systemNames.map((name, index) => ({
    name: name,
    stepNumber: stepNumbers[index]
  }));

  let groupStepNumbers = unionStepNumbers.reduce((acc, obj) => {
    if (!acc[obj.name]) {
      acc[obj.name] = [];
    }
    acc[obj.name].push(obj.stepNumber);
    return acc;
  }, {});
  
  const isOrdered = Object.values(groupStepNumbers).every((arr) => {
    return arr.every(function(_, i) {
      return i == 0 || arr[i] > arr[i - 1];
    });
  });

  return isOrdered;      
}

module.exports = checkStepNumbers;