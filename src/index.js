import { createBoard } from './code/board';
import { ship, numbShips } from './code/addShip';
import { createButtons } from './code/boardButtons';


function newButton() {
const playButton = document.createElement('button');
playButton.className = ('playbutton');
playButton.innerHTML = 'play Button';
document.body.appendChild(playButton);

}

const board = createButtons();



for (let i = 0; i < numbShips; i++) {
    let min = 0;
    let max = 9;
    let row = Math.floor(Math.random()*(max-min)+min);
    let col = Math.floor(Math.random()*(max-min)+min);
    
    
    ship(board, row, col);
    }

    
  
    newButton();