export function organizeGifts(gifts) {
    const countGifts = gifts.match(/\d+/g).map(Number);
    const nameGifts = gifts.match(/\D/g);

    return countGifts.map((count, i) => {
        const gift = nameGifts[i];
        let result = '';

        result += `[${gift}]`.repeat(count / 50);
        count %= 50;

        result += `{${gift}}`.repeat(count / 10);
        count %= 10;

        result += `(${gift.repeat(count)})`.repeat(+!!count);

        return result;
    }).join('');
}
