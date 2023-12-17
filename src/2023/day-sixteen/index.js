function transformTree(tree) {
    if (!tree.length) return null;

    const rootTree = [];

    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node === null) {
            rootTree.push(null);
            continue;
        }

        const side = i % 2 === 0 ? 'right' : 'left';
        const parentIndex = Math.floor((i - 1) / 2);
        const parent = rootTree[parentIndex];

        const subTree = { value: node, left: null, right: null };

        if (parent) parent[side] = subTree;

        rootTree.push(subTree);
    }

    return rootTree[0];
}

module.exports = transformTree;