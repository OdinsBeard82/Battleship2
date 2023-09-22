import { hit } from './ship'

export function attack(board, row, col) {
    const getPosition = document.getElementById('battleshipSquare');
    getPosition.onclick = hit;
    getPosition.addEventListener("click, hit");
}
  
attack();