import { createBoard } from './code/board';
import { shipPositions } from './code/shipPosition';


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


  let row = Math.floor(Math.random()*10)+1;
  let col = Math.floor(Math.random()*10)+1;


  const shipPosition = { row, col};
  
  addShip(board, shipPosition.row, shipPosition.col);
