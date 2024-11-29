export function organizeChristmasDinner(dishes) {
    const map = {};

    for (const dish of dishes) {
        const [name, ...ingredients] = dish;
        for (const ingredient of ingredients) {
            if (!map[ingredient]) map[ingredient] = [name];
            else map[ingredient].push(name);
        }
    }

    let res = Object.entries(map)
        .filter(([ingredient, dishes]) => dishes.length >= 2)
        .map(([ingredient, dishes]) => [ingredient, ...dishes.sort()]);

    res = res.sort((a, b) => a[0].localeCompare(b[0]));

    return res;
}
