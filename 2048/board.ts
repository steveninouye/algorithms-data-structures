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

  move(direction: string) {
    return null;
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

  directions(direction) {
    switch (direction) {
      case 'right':
        return {
          startTile: { row: this.height - 1, col: this.width - 1 },
          tilesDelta: { row: -1, col: 0 },
          tileDelta: { row: 0, col: -1 }
        };
      case 'down':
        return {
          startTile: { row: this.height - 1, col: 0 },
          tilesDelta: { row: 0, col: 1 },
          tileDelta: { row: -1, col: 0 }
        };
      case 'up':
        return {
          startTile: { row: 0, col: this.width - 1 },
          tilesDelta: { row: 0, col: -1 },
          tileDelta: { row: 1, col: 0 }
        };
      case 'left':
        return {
          startTile: { row: 0, col: 0 },
          tilesDelta: { row: 1, col: 0 },
          tileDelta: { row: 0, col: 1 }
        };
    }
  }
}

export default Board;
