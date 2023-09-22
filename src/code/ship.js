import { ship } from './addShip';

export class ship {
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

export default hit();
