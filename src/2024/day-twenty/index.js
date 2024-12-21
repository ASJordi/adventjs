export function fixGiftList(received, expected) {
    const missing = {};
    const extra = {};
    const receivedCount = {};
    const expectedCount = {};

    for (let gift of received) receivedCount[gift] = (receivedCount[gift] || 0) + 1;

    for (let gift of expected) expectedCount[gift] = (expectedCount[gift] || 0) + 1;

    for (let gift in expectedCount) {
        if (!receivedCount[gift]) missing[gift] = expectedCount[gift];
        else if (expectedCount[gift] > receivedCount[gift]) missing[gift] = expectedCount[gift] - receivedCount[gift];
    }

    for (let gift in receivedCount) {
        if (!expectedCount[gift]) extra[gift] = receivedCount[gift];
        else if (receivedCount[gift] > expectedCount[gift]) extra[gift] = receivedCount[gift] - expectedCount[gift];
    }

    return { missing, extra };
}