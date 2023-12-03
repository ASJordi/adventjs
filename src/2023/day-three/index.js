function findNaughtyStep(original, modified) {
    const [less, most] = [original, modified]
        .sort((a, b) => a.length - b.length)

    return [...most].find((x, i) => less[i] != x) ?? "";
}

module.exports = findNaughtyStep;