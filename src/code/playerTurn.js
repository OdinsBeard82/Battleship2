let player1 = 'O';
let player2 = 'X';
let currentPlayer = player1;

 export function clickTurn(square) {
    if (typeof playBoard[square.target.id] == 'number') {
        turn(square.target.id, currentPlayer);
    
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
    }

}