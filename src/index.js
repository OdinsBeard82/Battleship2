import { createBoard } from './code/board';
import { ship, numbShips } from './code/addShip';
import { createButtons } from './code/boardButtons';
import { computerChoice, numbChoice } from './code/computer-choice';
import { clickTurn } from './code/playerTurn';





const board = createButtons();


for (let i = 0; i < numbShips; i++) {
    let min = 0;
    let max = 9;
    let row = Math.floor(Math.random()*(max-min)+min);
    let col = Math.floor(Math.random()*(max-min)+min);
    
    
    ship(board, row, col);
    }

    for (let i = 0; i < numbChoice; i++) {
        let min = 0;
        let max = 9;
        let row = Math.floor(Math.random()*(max-min)+min);
        let col = Math.floor(Math.random()*(max-min)+min);
        
        
        computerChoice(board, row, col);
        }
  