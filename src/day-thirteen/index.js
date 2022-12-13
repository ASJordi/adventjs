function getFilesToBackup(lastBackup, changes) {

  let filterFiles = changes.filter(x => x[1] > lastBackup);
  let filesId = filterFiles.map(x => x[0]);
  let sortedFiles = filesId.sort((a, b) => a - b);

  return [...new Set(sortedFiles)];
}

module.exports = getFilesToBackup;