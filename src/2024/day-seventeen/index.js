export function detectBombs(grid) {
    return grid.map((row,i) => {
        return row.map((_,j) => {
            let counterBombs = 0;

            for (let r = -1; r < 2; r++) {
                for (let c = -1; c < 2; c++) {
                    if(c === 0 && r === 0) continue;
                    const x = i + r;
                    const y = j + c;

                    if(grid[x] && grid[x][y]) counterBombs++;
                }
            }

            return counterBombs
        });
    });
}