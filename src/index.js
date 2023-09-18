import { createBoard } from './code/board';

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

const board = createBoard();


function addShip(board, row, col) {
    const shipImg = document.createElement('img');
    shipImg.src = '../src/images/ship.jpg';
    shipImg.className = 'ship-square';
    const squareIndex = row * 10 + col; 
    board.children[squareIndex].appendChild(shipImg);
}

const shipPosition = { row: 0, col: 1 };
const shipPosition2 = { row: 0, col: 2 };
const shipPosition3 = { row: 0, col: 3 };
const shipPosition4 = { row: 0, col: 4 };
const shipPosition5 = { row: 1, col: 4 };

addShip(board, shipPosition.row, shipPosition.col);
addShip(board, shipPosition2.row, shipPosition2.col);
addShip(board, shipPosition3.row, shipPosition3.col);
addShip(board, shipPosition4.row, shipPosition4.col);
addShip(board, shipPosition5.row, shipPosition5.col);

  






