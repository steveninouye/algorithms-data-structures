import Tile from './tile';
import directions from './directions';

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

    const { startTile, tilesDelta, tileDelta } = directions[direction];
    let { row, col } = startTile;

    this.availableTiles = [];

    while (this.matrix[row] && this.matrix[row][col]) {
      let slowRow = row;
      let slowCol = col;
      let fastRow = row + tileDelta.row;
      let fastCol = col + tileDelta.col;

      while (this.matrix[fastRow] && this.matrix[fastRow][fastCol]) {
        let slowTile: Tile = this.matrix[slowRow][slowCol];
        const fastTile: Tile = this.matrix[fastRow][fastCol];
        if (slowTile.val === null && fastTile.val) {
          slowTile.merge(fastTile)
        } else if (slowTile.val && fastTile.val) {
          
          if (slowTile.val === fastTile.val) {
            slowTile.merge(fastTile)
            this.score += slowTile.val
          }
          
          slowRow += tileDelta.row;
          slowCol += tileDelta.col;
          slowTile = this.matrix[slowRow][slowCol]
          
          if (slowTile.val !== fastTile.val && fastTile !== this.matrix[slowRow][slowCol]) {
            slowTile.merge(fastTile)
          }
        }

        fastRow += tileDelta.row;
        fastCol += tileDelta.col;
      }

      while (this.matrix[slowRow] && this.matrix[slowRow][slowCol]) {
        const tile: Tile = this.matrix[slowRow][slowCol]

        if (tile.val === null) {
          this.availableTiles.push(tile);
        }

        slowRow += tileDelta.row;
        slowCol += tileDelta.col;
      }

      row += tilesDelta.row;
      col += tilesDelta.col;
    }
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
