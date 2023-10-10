function newButton() {
  const playButton = document.createElement('button');
  playButton.className = ('playbutton');
  playButton.innerHTML = 'play Button';
  document.body.appendChild(playButton);

  playButton.addEventListener('click', () => {
    computerChoice(board, row, col);

  });
  }
  newButton();

export function computerChoice(board, row, col) {
    const shipText = document.createTextNode('X');
    shipText.className = 'computer-choice';
    const squareIndex = row * 10 + col; 
    board.children[squareIndex].appendChild(shipText);
}
  export const numbChoice = 1;


