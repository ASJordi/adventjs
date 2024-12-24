export function isTreesSynchronized(tree1, tree2) {
    if (!tree1 || !tree2) return [!tree1 && !tree2, tree1?.value ?? null];

    return [
        tree1.value === tree2.value &&
        isTreesSynchronized(tree1.left, tree2.right)[0] &&
        isTreesSynchronized(tree1.right, tree2.left)[0],
        tree1.value
    ];
}