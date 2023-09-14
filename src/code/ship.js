class Ship {
    constructor(length) {
      this.length = length;
      this.hits = 0;
      this.sunk = false;
    }
  
    hit() {
      if (!this.isSunk()) {
        this.hits++;
        if (this.hits === this.length) {
          this.sunk = true;
        }
      }
    }
  
    isSunk() {
      return this.sunk;
    }
  }

  function addShip() {
    const shipImg = document.createElement('img');
    shipImg.src = 'shipImg.png';
    shipImg.className = 'ship-square';
  
  }
  

 
  export default addShip;