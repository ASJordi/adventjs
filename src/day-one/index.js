function wrapping (gifts) {
  return gifts.map(gift => { 
    const papel = "*".repeat(gift.length + 2)
    return `${papel}\n*${gift}*\n${papel}`
  })
}

module.exports = wrapping;