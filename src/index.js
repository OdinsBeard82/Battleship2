import { createBoard } from './code/board';
import { addShip, numbShips } from './code/ship';


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

for (let i = 0; i < numbShips; i++) {
    let min = 0;
    let max = 9;
    let row = Math.floor(Math.random()*(max-min)+min);
    let col = Math.floor(Math.random()*(max-min)+min);
    
    
    addShip(board, row, col);
    }