function revealSabotage(store) {
    store.forEach((row, i) => {
        row.forEach((col, j) => {
            if (col !== '*') {
                const adjacentCells = [
                    store[i - 1]?.[j - 1],
                    store[i - 1]?.[j],
                    store[i - 1]?.[j + 1],
                    row[j - 1],
                    row[j + 1],
                    store[i + 1]?.[j - 1],
                    store[i + 1]?.[j],
                    store[i + 1]?.[j + 1],
                ];

                const count = adjacentCells.filter(cell => cell === '*').length;

                if (count > 0) row[j] = `${count}`;
            }
        });
    });

    return store;
}

module.exports = revealSabotage;