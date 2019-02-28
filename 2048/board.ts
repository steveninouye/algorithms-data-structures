class Board {
  matrix: number[][];
  height: number;
  width: number;
  availablePositions: any[];

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
    this.availablePositions = [];
    this.createMatrix();
  }

  createMatrix() {
    const rows = new Array(this.height);
    this.matrix = rows.map((_, rowIdx) => {
      let row = [];
      for (let colIdx = 0; colIdx < this.width; colIdx++) {
        row.push(undefined);
        this.availablePositions.push({ row: rowIdx, col: colIdx });
      }
      return row;
    });
  }

  render() {
    this.renderScore();
    this.renderMatrix();
  }

  renderScore() {}

  renderMatrix() {}

  addNewTile() {}
}

export default Board;
