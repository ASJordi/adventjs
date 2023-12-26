function travelDistance(map) {
    const mapArr = map.split('\n')
    const road = mapArr.join('')
    const cols = mapArr[0].length
    const sPos = road.indexOf('S')

    let gift = 1
    let movs = 0
    let sCol = sPos % cols
    let sRow = Math.floor(sPos / cols)

    const nums = road.replace(/\.|S/g, '')

    for (const n of nums) {
        const gPos = road.indexOf(`${gift}`)
        const gCol = gPos % cols
        const gRow = Math.floor(gPos / cols)

        movs += Math.abs(sRow - gRow) + Math.abs(sCol - gCol)

        sCol = gCol
        sRow = gRow

        gift++
    }

    return movs
}

module.exports = travelDistance