export function canExit(maze) {
  
  let start = [];
  let end = [];
  let visited = [];
  let queue = [];
  let dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 'S') start = [i, j];
      if (maze[i][j] === 'E') end = [i, j];
    }
  }

  queue.push(start);
  visited.push(start);

  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr[0] === end[0] && curr[1] === end[1]) {
      return true;
    }
    for (let i = 0; i < dir.length; i++) {
      let next = [curr[0] + dir[i][0], curr[1] + dir[i][1]];
      if (next[0] >= 0 && next[0] < maze.length 
        && next[1] >= 0 
        && next[1] < maze[0].length 
        && maze[next[0]][next[1]] !== 'W' 
        && !visited.some((item) => item[0] === next[0] 
        && item[1] === next[1])) 
      {
        queue.push(next);
        visited.push(next);
      }
    }
  }
  return false;
}
