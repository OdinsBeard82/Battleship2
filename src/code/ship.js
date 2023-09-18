function addShip(board, row, col) {
  const shipImg = document.createElement('img');
  shipImg.src = '../src/images/ship.jpg';
  shipImg.className = 'ship-square';
  const squareIndex = row * 10 + col; 
  board.children[squareIndex].appendChild(shipImg);
}