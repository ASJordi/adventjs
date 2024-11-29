export function calculateTime(deliveries) {
    let t = -(7 * 3600)

    for (const delivery of deliveries) {
        const [h, m, s] = delivery.split(':').map(Number)
        t += h * 3600 + m * 60 + s
    }

    const sign = t < 0 ? '-' : ''
    t = Math.abs(t)

    const h = Math.floor(t / 3600)
        .toString()
        .padStart(2, '0')

    t %= 3600

    const m = Math.floor(t / 60)
        .toString()
        .padStart(2, '0')

    t %= 60

    const s = t.toString().padStart(2, '0')

    return `${sign}${h}:${m}:${s}`
}
