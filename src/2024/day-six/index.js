export function inBox(box) {
    for (let i = 1; i < box.length - 1; i++) {
        const row = box[i];
        if (row.includes('*')) {
            const index = row.indexOf('*');
            if (index > 0 && index < row.length - 1) return true;
        }
    }

    return false;
}
