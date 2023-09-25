import { hit } from './ship'


export function click(board, row, col) {
    var ev = document.createEvent("MouseEvent");
    var el = document.elementFromPoint(row, col);
    const getPosition = document.getElementById('battleshipSquare');
    getPosition.onclick = hit;
    getPosition.addEventListener("click, hit");
}
  
attack();


