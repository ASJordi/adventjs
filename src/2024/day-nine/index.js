export function moveTrain(board, mov) {
    const directions = { 'L': [0, -1], 'R': [0, 1], 'U': [-1, 0], 'D': [1, 0] };

    let headX, headY;
    for (let i = 0; i < board.length; i++) {
        const j = board[i].indexOf('@');
        if (j !== -1) {
            headX = i;
            headY = j;
            break;
        }
    }

    const [dx, dy] = directions[mov];
    const newX = headX + dx, newY = headY + dy;

    if (newX < 0 || newX >= board.length || newY < 0 || newY >= board[0].length) return 'crash';
    const nextCell = board[newX][newY];
    return nextCell === 'o' ? 'crash' : nextCell === '*' ? 'eat' : 'none';
}