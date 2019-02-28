import Tile from './tile';

class Board {
  matrix: number[][];
  height: number;
  width: number;
  score: number;
  availableTiles: any[];

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
    this.score = 0;
    this.availableTiles = [];
    this.createMatrix();
  }

  createMatrix() {
    const rows = new Array(this.height);
    this.matrix = rows.map((_, rowIdx) => {
      let row = [];
      for (let colIdx = 0; colIdx < this.width; colIdx++) {
        const tile = new Tile(rowIdx, colIdx);
        row.push(tile);
        this.availableTiles.push(tile);
      }
      return row;
    });
  }

  move(direction: string) {}

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
