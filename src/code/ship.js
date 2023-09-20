function addShip(board, row, col) {
  const shipImg = document.createElement('img');
  shipImg.src = '../images/ship.jpg';
  shipImg.className = 'ship-square';
  board.children[squareIndex].appendChild(shipImg);
}


