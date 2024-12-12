export function calculatePrice(ornaments) {
    const values = { '*': 1, 'o': 5, '^': 10, '#': 50, '@': 100 }

    return [...ornaments].reduce((acc, cur, i, arr) => (
        acc + ([1, -1][+(values[cur] < values[arr[++i]])]) * values[cur]
    ), 0) || undefined
}