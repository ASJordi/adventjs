function wrapping(gifts) {

  let wrapped = [];
  let paper = '*';

  gifts.forEach((gift) =>{
    let wrap = paper.repeat(gift.length + 2);
    wrapped.push(wrap + "\n" + paper + gift + paper + "\n" + wrap);
  });

  return wrapped;
}

module.exports = wrapping;