function drawGift(size, symbol) {
    const endLine = "#\n";
    if (size <= 1) return endLine;
    const p = "#";
    let g = "";
    const ll = size * 2 - 1;
    const notFace = [1, size, ll];
    for (let i = 1; i <= ll; i++) {
        const isFace = !notFace.includes(i);
        const isMiddle = i === size;
        const growing = i < size;
        const prefix = growing
            ? " ".repeat(ll - size -i + 1) + p
            : p;
        if (isFace) {
            const sideFace =
                p + symbol.repeat(growing
                    ? i - 2
                    : ll - i - 1
                );
            const topFace = symbol.repeat(size - 2);
            g += prefix + topFace + sideFace + endLine;
        } else if (isMiddle) {
            const symbols = symbol.repeat(ll - size - 1)
            g += p.repeat(size) + symbols + endLine;
        } else {
            g += prefix + p.repeat(size - 2) + endLine;
        }
    }
    return g;
}

module.exports = drawGift;