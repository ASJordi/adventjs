export function minMovesToStables(reindeer, stables) {
    reindeer.sort();
    return stables.sort().reduce((acc, curr, i) =>
        acc + Math.abs(reindeer[i] - curr), 0
    );
}