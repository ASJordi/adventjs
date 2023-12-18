function optimizeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let m = [];
    for (let i of intervals) {
        if (!m.length || m[m.length - 1][1] < i[0]) m.push(i);
        else m[m.length - 1][1] = Math.max(m[m.length - 1][1], i[1]);
    }

    return m;
}

module.exports = optimizeIntervals;