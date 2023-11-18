import React from 'react';

function AddShip({ row, col, hasShip, isHit, handleAttack }) {
  return (
    <button
      className={`${hasShip ? 'ship' : isHit ? 'hit' : 'miss'}`}
      onClick={() => handleAttack(row, col)}
    ></button>
  );
}

export default AddShip;
