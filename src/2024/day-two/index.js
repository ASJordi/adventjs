export function createFrame(names) {
    const maxLen = names.reduce((max, name) => Math.max(max, name.length), 0);
    const border = '*'.repeat(maxLen + 4);

    return [
        border,
        ...names.map(name => `* ${name.padEnd(maxLen)} *`),
        border
    ].join('\n');
}