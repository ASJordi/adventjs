export function distributeWeight(weight) {

    const boxShape = {
        1: [' _ ', '|_|'],
        2: [' ___ ', '|___|'],
        5: [' _____ ', '|     |', '|_____|'],
        10: [' _________ ', '|         |', '|_________|'],
    }

    const boxes = []
    const weights = Object.keys(boxShape)

    for (let i = weights.length - 1; i > -1; i--) {
        const boxWeight = parseInt(weights[i])

        if (weight - boxWeight < 0) continue

        weight -= boxWeight
        boxes.unshift(boxShape[boxWeight])

        while (weight - boxWeight > -1) {
            weight -= boxWeight
            boxes.unshift(boxShape[boxWeight])
        }

        if (!weight) break
    }

    const boxesToDraw = []

    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i]

        if (i !== boxes.length - 1) {
            const offset = ~~`${boxes[i + 1][0].trim().match(/_/g)?.length}` + 1
            box[box.length - 1] = box[box.length - 1].padEnd(offset, '_')
        }

        boxesToDraw.push(box.slice(~~!!~~`${i}`).join('\n'))
    }

    return boxesToDraw.join('\n')
}
