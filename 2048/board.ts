import Tile from './tile';
import directions from './directions';

class Board {
  matrix: Tile[][];
  height: number;
  width: number;
  score: number;
  availableTiles: any[];

  constructor(height = 4, width = 4) {
    this.height = height;
    this.width = width;
    this.score = 0;
    this.availableTiles = [];
    this.createMatrix();
  }

  createMatrix() {
    const matrix: Tile[][] = [];
    for (let rowIdx = 0; rowIdx < this.height; rowIdx++) {
      const row: Tile[] = [];
      for (let colIdx = 0; colIdx < this.width; colIdx++) {
        const tile = new Tile();
        row.push(tile);
        this.availableTiles.push(tile);
      }
      matrix.push(row);
    }
    this.matrix = matrix;
  }

  move(direction: string) {
    const { startTile, tilesDelta, tileDelta } = directions[direction];
    const { rowsDelta, colsDelta } = tilesDelta;
    const { rowDelta, colDelta } = tileDelta;
    let { row, col } = startTile;
    this.availableTiles = [];

    while (this.matrix[row] && this.matrix[row][col]) {
      let slowPos = { slowRow: row, slowCol: col };
      let fastPos = {
        fastRow: row + rowDelta,
        fastCol: col + colDelta
      };
      slowPos = this.shiftTiles(slowPos, fastPos, tileDelta);
      this.findAvailableTiles(slowPos, tileDelta);
      row += rowsDelta;
      col += colsDelta;
    }
  }

  shiftTiles(
    { slowRow, slowCol }: { slowRow: number; slowCol: number },
    { fastRow, fastCol }: { fastRow: number; fastCol: number },
    { rowDelta, colDelta }: { rowDelta: number; colDelta: number }
  ): { slowRow: number; slowCol: number } {
    while (this.matrix[fastRow] && this.matrix[fastRow][fastCol]) {
      let slowTile: Tile = this.matrix[slowRow][slowCol];
      const fastTile: Tile = this.matrix[fastRow][fastCol];

      if (slowTile.val === null && fastTile.val) {
        slowTile.merge(fastTile);
      } else if (slowTile.val && fastTile.val) {
        if (slowTile.val === fastTile.val) {
          slowTile.merge(fastTile);
          this.score += slowTile.val;
        }

        slowRow += rowDelta;
        slowCol += colDelta;
        slowTile = this.matrix[slowRow][slowCol];

        if (slowTile.val !== fastTile.val && fastTile !== slowTile) {
          slowTile.merge(fastTile);
        }
      }

      fastRow += rowDelta;
      fastCol += colDelta;
    }
    return { slowRow, slowCol };
  }

  findAvailableTiles(
    { slowRow, slowCol }: { slowRow: number; slowCol: number },
    { rowDelta, colDelta }: { rowDelta: number; colDelta: number }
  ) {
    while (this.matrix[slowRow] && this.matrix[slowRow][slowCol]) {
      const tile: Tile = this.matrix[slowRow][slowCol];

      if (tile.val === null) {
        this.availableTiles.push(tile);
      }

      slowRow += rowDelta;
      slowCol += colDelta;
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
