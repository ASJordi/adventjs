function decorateTree(base) {

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

  base = base.split(" ")
  let decorations = new Array(base.length - 1).fill(base)
  return decorations.reduce((total, x) =>
    total.concat(
      [new Array(total.at(-1).length - 1).fill("-").map((_, i) => {
        return combOfDecorations[total.at(-1).slice(i, i + 2).join("")]
      }).flat()]
    ),[base]).slice(0, base.length).map(x => x.join(" ")).reverse()
}

module.exports = decorateTree;