export function createButtons() {
    const board = document.getElementById('board');

    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            const battleshipButtons = document.createElement('button');
            battleshipButtons.className = 'battleship-button';
            board.appendChild(battleshipButtons);
            battleshipButtons.addEventListener("click",function() {
                if (this.querySelector('img')) {
                    this.innerHTML = 'Hit';
                } else {
                    this.innerHTML = 'Missed';

                }
                 
         })
                
            }
        }
    

    return board;
}


