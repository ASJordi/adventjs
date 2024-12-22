export function generateGiftSets(gifts) {
    const result = [];

    function backtrack(start, currentCombination) {

        if (currentCombination.length > 0) result.push([...currentCombination]);

        for (let i = start; i < gifts.length; i++) {
            currentCombination.push(gifts[i]);
            backtrack(i + 1, currentCombination);
            currentCombination.pop();
        }
    }

    backtrack(0, []);

    return result.sort((a, b) => a.length - b.length);
}