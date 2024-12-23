export function findMissingNumbers(nums) {
    const uniqueNums = new Set(nums)
    const maxNum = Math.max(...uniqueNums)
    const collection = new Set()

    for (let i = 1; i < maxNum; i++) collection.add(i)

    return [...collection.difference(uniqueNums)]
}