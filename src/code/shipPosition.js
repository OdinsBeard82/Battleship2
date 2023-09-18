export function addShip(board, shipPosition) {
    const shipImg = document.createElement('img');
    shipImg.src = '../src/images/knight.jpg';
    shipImg.className = 'ship-square';
    board.children[shipPosition.row][shipPosition.col].appendChild(shipImg);
}