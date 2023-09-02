const element = document.getElementById('board');

export function createBoard() {
    const board = document.getElementById('board');

    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            const battleshipSquare = document.createElement('div');
            battleshipSquare.className = 'battleship-square';

            if ((x + y) % 2 === 0) {
                battleshipSquare.style.backgroundColor = 'fffff';
            }

            board.appendChild(battleshipSquare);
        }
    }
}
