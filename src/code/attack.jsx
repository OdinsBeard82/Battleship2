import React from 'react';

function Attack({ board, handleAttack }) {
  return (
  <div className="board">
    {board.map((rowArray, rowIndex) => (
    <div key={rowIndex}>
      {rowArray.map((cell) => (
      <AddShip
      key={`${cell.row}-${cell.col}`}
      row={cell.row}
      col={cell.col}
      hasShip={cell.hasShip}
      isHit={cell.isHit}
      handleAttack={handleAttack}/>
      ))}
      </div>
      ))}
      </div>
  );
}

export default Attack;
