export function createBoard() {
    const board = document.getElementById('board');

    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            const battleshipSquare = document.createElement('div');
            battleshipSquare.className = 'battleship-square';
            board.appendChild(battleshipSquare);
        }
    }

    return board;
}