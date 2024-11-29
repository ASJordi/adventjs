export function findBalancedSegment(message) {
    let count = 0;
    let start = 0;
    let end = -1;
    let map = new Map();
    map.set(0, -1);

    for (let i = 0; i < message.length; i++) {
        count += message[i] === 1 ? 1 : -1;

        if (map.has(count)) {
            let segmentStart = map.get(count) + 1;
            let segmentEnd = i;

            if (segmentEnd - segmentStart > end - start) {
                start = segmentStart;
                end = segmentEnd;
            }
        } else {
            map.set(count, i);
        }
    }

    return end >= start ? [start, end] : [];
}
