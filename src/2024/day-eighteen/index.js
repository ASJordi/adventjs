export function findInAgenda(agenda, phone) {
    const lines = agenda.split('\n');
    const matchingResults = [];

    for (const line of lines) {
        const nameMatch = line.match(/<([^>]+)>/);
        const phoneMatch = line.match(/\+\d{1,2}-\d{3}-\d{3}-\d{3}/);

        if (!nameMatch || !phoneMatch) continue;

        const name = nameMatch[1];
        const currentPhone = phoneMatch[0];
        const addressMatch = line.replace(currentPhone, '').replace(`<${name}>`, '').trim();
        const newAddressMatch = addressMatch.toString().substring(0, addressMatch.toString().indexOf("  "))

        if (currentPhone.includes(phone)) {
            matchingResults.push({
                name: name,
                address: addressMatch
            });
        }
    }

    return matchingResults.length === 1 ? matchingResults[0] : null;
}