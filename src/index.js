class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        if (!this.isSunk()) {
            this.hits++;
            if (this.hits === this.length) {
                this.sunk = true;
            }
        }
    }

    isSunk() {
        return this.sunk;
    }
}

function createBoard() {
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

const board = createBoard();

function addShip(board, row, col) {
    const shipImg = document.createElement('img');
    shipImg.src = '../src/images/ship.jpg';
    shipImg.className = 'ship-square';
    const squareIndex = row * 10 + col; 
    board.children[squareIndex].appendChild(shipImg);
}

const shipPosition = { row: 0, col: 1 };
addShip(board, shipPosition.row, shipPosition.col);


  






