function manufacture(gifts, materials) {
    const m = materials.split("")

    return gifts.filter(g => {
        const x = [...new Set([...g, ...m])]

        return x.length === m.length
    })
}

module.exports = manufacture;