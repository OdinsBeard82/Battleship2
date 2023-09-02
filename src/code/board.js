const element = document.getElementById('board');

export function createBoard() {
    const board = document.getElementById('board');

    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            const battleshipSquare = document.createElement('div');
            battleshipSquare.className = 'battleship-square';

            if ((x + y) % 2 === 0) {
                battleshipSquare.style.backgroundColor = '#855E42';
            }

            board.appendChild(battleshipSquare);
        }
    }
}
