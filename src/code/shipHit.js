hit() {
    if (!this.isSunk()) {
      this.hits++;
      if (this.hits === this.length) {
        this.sunk = true;
      }
    }
  }