export function maxDistance(movements) {
    let d = 0

    let r = movements.match(/>/g)?.length ?? 0
    let l = movements.match(/</g)?.length ?? 0

    d += r
    d -= l

    let extra = movements.length - (r + l)

    return Math.abs(d) + extra
}
