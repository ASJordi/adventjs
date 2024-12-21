export function treeHeight(tree) {
    if (!tree) return 0;
    return Math.max(treeHeight(tree.left), treeHeight(tree.right)) + 1;
}