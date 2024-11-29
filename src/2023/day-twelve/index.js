export function checkIsValidCopy(original, copy) {
    for (let i = 0; i < original.length; i++) {
        const letter = original[i];
        const copyLetter = copy[i];

        if (letter === ' ' && copyLetter !== ' ') return false;

        if (letter !== ' ' && !['#', '+', ':', '.', ' ', letter.toLowerCase()].includes(copyLetter)) return false;
    }

    return true;
}
