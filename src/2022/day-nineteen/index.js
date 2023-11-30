function sortToys(toys, positions) {

  let sortedToys = toys.map((name, index) => ({
    name: name,
    position: positions[index]
  }));

  sortedToys = sortedToys.sort((a, b) => a.position - b.position);

  return [...sortedToys.map(obj => obj.name)];
}

module.exports = sortToys;