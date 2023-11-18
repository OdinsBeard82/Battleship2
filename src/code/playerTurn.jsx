import React from 'react';

function PlayerTurn({ playerTurn }) {
  return (
    <div>
      <h2>{playerTurn ? "Player's Turn" : "Computer's Turn"}</h2>
    </div>
  );
}

export default PlayerTurn;
