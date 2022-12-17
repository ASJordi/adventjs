function carryGifts(gifts, maxWeight) {
  if (Math.max(...gifts.map(gift => gift.length)) > maxWeight) {
    return [];
  }

  let bags = [];
  let currentWeight = 0;
  let currentBag = [];

  gifts.forEach((gift) => {
    if (currentWeight + gift.length > maxWeight) {
      bags.push(currentBag);
      currentBag = [];
      currentWeight = 0;
    }

    currentBag.push(gift);
    currentWeight += gift.length;
  });

  bags.push(currentBag);

  bags = bags.map((bag) => bag.join(" "))

  return bags;
}

module.exports = carryGifts;