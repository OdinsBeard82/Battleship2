import React, { useState } from 'react';
import './App.css';
import Board from './code/board';
import ComputerChoice from './code/computer-choice';
import PlayerTurn from './code/playerTurn';

function App() {
  const [playerBoard, setPlayerBoard] = useState(createBoard(5));
  const [computerBoard, setComputerBoard] = useState(createBoard(5));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [computerTurn, setComputerTurn] = useState(false);


  function createBoard(numShips) {
    const board = [];
    const gridSize = 10;

    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        row.push({
          row: i,
          col: j,
          hasShip: Math.random() < 0.2 && numShips > 0,
          isHit: false,
        });
        if (row[row.length - 1].hasShip) {
          numShips--;
        }
      }
      board.push(row);
    }

    return board;
  }

  function handleAttack(row, col) {
    setPlayerBoard((prevBoard) =>
      prevBoard.map((rowArray) =>
        rowArray.map((cell) =>
          cell.row === row && cell.col === col
            ? { ...cell, isHit: true }
            : cell
        )
      )
    );

    setPlayerTurn(!playerTurn);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Battleship</h1>
      </div>
      <PlayerTurn playerTurn={playerTurn} />
      <div id="playerBoard">
        <Board board={playerBoard} handleAttack={handleAttack} />
      </div>
      <div id="computerBoard">
        <ComputerChoice board={computerBoard} handleAttack={handleAttack} />
      </div>
    </div>
  );
}

export default App;
