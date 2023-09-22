export function ship(board, row, col) {
  const shipImg = document.createElement('img');
  shipImg.src = '../src/images/ship.jpg';
  shipImg.className = 'ship-square1';
  const squareIndex = row * 10 + col; 
  board.children[squareIndex].appendChild(shipImg);
  
}

export const numbShips = 5;

