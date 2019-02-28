class Board {
  matrix: number[][];
  height: number;
  width: number;
  score: number;
  availablePositions: any[];

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
    this.score = 0;
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

  move(direction) {
    
  }

  render() {
    this.renderScore();
    this.renderMatrix();
  }

  renderScore() {
    console.log(this.score);
  }

  renderMatrix() {
    console.log(this.matrix);
  }

  addNewTile() {
    console.log('Adding New Tile');
    // set game over here
    return false;
  }
}

export default Board;
