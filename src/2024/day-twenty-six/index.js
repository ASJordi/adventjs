export function getCompleted(timeWorked, totalTime) {
    const [t1, t2] = [timeWorked, totalTime].map(timeStr => {
        const [hh, mm, ss] = timeStr.split(':');
        return +ss + +mm * 60 + +hh * 3600;
    })

    return Math.round((t1 / t2) * 100) + '%';
}