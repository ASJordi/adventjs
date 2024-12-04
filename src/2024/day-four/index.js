export function createXmasTree(height, ornament) {
    const tree = [];
    const wood = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);

    for (let i = 0; i < height; i++) {
        const level = "_".repeat(height - 1 - i) + ornament.repeat(2 * i + 1) + "_".repeat(height - 1 - i);
        tree.push(level);
    }

    tree.push(wood, wood);

    return tree.join("\n");
}