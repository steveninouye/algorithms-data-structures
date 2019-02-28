import Tile from './tile';

class Board {
  matrix: Tile[][];
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
    const { startTile, tilesDelta, tileDelta } = this.directions(direction);
    let { row, col } = startTile;

    this.availableTiles = [];

    while (this.matrix[row] && this.matrix[row][col]) {
      let row1 = row;
      let col1 = col;
      let row2 = row + tileDelta.row;
      let col2 = col + tileDelta.col;

      while (this.matrix[row2] && this.matrix[row2][col2]) {
        const tile1: Tile = this.matrix[row1][col1];
        const tile2: Tile = this.matrix[row2][col2];
        if (tile1.val === null && tile2.val) {
          this.shiftTile(tile1, tile2);
        } else if (tile1.val && tile2.val) {
          if(tile1.val === tile2.val) {
            this.score += this.mergeTiles(row1,col1,row2,col2)
          }
          row1 += tileDelta.row;
          col1 += tileDelta.col;
          if(tile1.val !== tile2.val && tile2 !== this.matrix[row1][col1]) {
            this.shiftTile(this.matrix[row1][col1], tile2);
          }
        }
        row2 += tileDelta.row;
        col2 += tileDelta.col;
      }

      while (this.matrix[row1] && this.matrix[row1][col1]) {
        if (this.matrix[row1][col1].val === null) {
          this.availableTiles.push(this.matrix[row1][col1]);
        }
        row1 += tileDelta.row;
        col1 += tileDelta.col;
      }

      row += tilesDelta.row;
      col += tilesDelta.col;
    }
  }

  mergeTiles(row1: number, col1: number, row2: number, col2: number) {
    this.matrix[row1][col1].val *= 2;
    this.matrix[row2][col2].val = null;
    return this.matrix[row1][col1].val;
  }

  shiftTile(toTile: Tile, fromTile: Tile): void {
    toTile.val = fromTile.val;
    fromTile.val = null;
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
