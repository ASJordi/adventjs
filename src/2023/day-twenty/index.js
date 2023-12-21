function distributeGifts(weights) {
    const r = weights.length;
    const c = weights[0].length;
    const res = Array.from({ length: r }, () => Array(c).fill(0));

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let sum = 0;
            let count = 0;

            if (i > 0 && weights[i - 1][j] !== null) {
                sum += weights[i - 1][j];
                count++;
            }

            if (i < r - 1 && weights[i + 1][j] !== null) {
                sum += weights[i + 1][j];
                count++;
            }

            if (j > 0 && weights[i][j - 1] !== null) {
                sum += weights[i][j - 1];
                count++;
            }

            if (j < c - 1 && weights[i][j + 1] !== null) {
                sum += weights[i][j + 1];
                count++;
            }

            if (weights[i][j] !== null) {
                sum += weights[i][j];
                count++;
            }

            res[i][j] = Math.round(sum / count);
        }
    }

    return res;
}

module.exports = distributeGifts;