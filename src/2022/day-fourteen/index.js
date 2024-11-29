export function getOptimalPath(path) {
  return path.reduceRight((acc, el) => {
    return el.map(
      (value, index) => value + Math.min(acc[index], acc[index + 1])
    );
  })[0];
}
