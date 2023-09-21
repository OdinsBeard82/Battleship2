import { createBoard } from './code/board';
import { addShip, numbShips } from './code/addShip';
import { ship } from './code/ship';


const board = createBoard();

for (let i = 0; i < numbShips; i++) {
    let min = 0;
    let max = 9;
    let row = Math.floor(Math.random()*(max-min)+min);
    let col = Math.floor(Math.random()*(max-min)+min);
    
    
    addShip(board, row, col);
    }