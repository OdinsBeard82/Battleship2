import React from 'react';

function ComputerChoice({ board, handleAttack }) {
  return (
    <div className="board">
      {board.map((rowArray, rowIndex) => (
        <div key={rowIndex}>
          {rowArray.map((cell) => (
            <button
              key={`${cell.row}-${cell.col}`}
              className={`${cell.hasShip ? 'ship' : cell.isHit ? 'hit' : 'miss'}`}
              onClick={() => handleAttack(cell.row, cell.col)}
            ></button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ComputerChoice;
