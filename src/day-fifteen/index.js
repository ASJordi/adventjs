function decorateTree(base) {

  const tree = base.split(" ");
  
  const combOfDecorations = {
    "PP":  "P",
    "BP":  "R",
    "RR":  "R",
    "BR":  "P",
    "PB":  "R",
    "RP":  "B",
    "RB":  "P",
    "BB":  "B",
    "PR":  "B"
  }

  const nextLevel = (el = []) => {
    return el.slice(1).map((_, i) => combOfDecorations[el[i] + el[i + 1]]);
  };

  return tree
    .slice(1)
    .reduce((acc, _, index) => [...acc, nextLevel(acc[index])], [tree])
    .reverse()
    .map((el) => el.join(" "));
}

module.exports = decorateTree;