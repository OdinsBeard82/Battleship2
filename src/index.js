import { Ship } from './code/ship';
import { createBoard as createBoard } from './code/board.js';

const ship1 = new Ship(4);
const ship2 = new Ship(3);

console.log(ship1);
console.log(ship2);

ship1.hit();
console.log("Is ship1 sunk?", ship1.isSunk());

document.addEventListener('DOMContentLoaded', function () {
    createBoard();
});



