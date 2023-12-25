function getStaircasePaths(steps, maxJump) {
    if (steps === 0) return [[]];

    let result = [];

    for (let i = 1; i <= Math.min(steps, maxJump); i++) {
        let paths = getStaircasePaths(steps - i, maxJump);
        for (let path of paths) {
            result.push([i, ...path]);
        }
    }

    return result;
}

module.exports = getStaircasePaths;