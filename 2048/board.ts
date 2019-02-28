class Board {
  matrix: any[][]

  constructor(size) {
    const rows = new Array(size);
    this.matrix = rows.map((row) => new Array(size));
  }

  
}

export default Board;
