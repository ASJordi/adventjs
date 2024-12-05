export function organizeShoes(shoes) {
    const map = new Map();
    const pairs = [];

    for (const { type: foot, size } of shoes) {
        if (!map.has(size)) map.set(size, { I: 0, R: 0 });

        const entry = map.get(size);
        entry[foot]++;

        if (entry.I > 0 && entry.R > 0) {
            pairs.push(size);
            entry.I--;
            entry.R--;
        }
    }

    return pairs;
}