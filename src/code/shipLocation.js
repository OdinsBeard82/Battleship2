import { useState } from 'react';

export function shipLocation() {


    let shipPosition = new Node(3);
    
    const shipImg = document.createElement('img');
    shipImg.src = '../Images/ship.jpg';
    shipImg.className = 'ship-square';
    board.children[shipPosition.row][shipPosition.col].appendChild(shipImg);
  
    
}