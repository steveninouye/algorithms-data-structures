import randomNum from './randomNumber';

class Tile {
  val: number;
  row: number;
  col: number;

  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.val = null;
  }

  merge(fromTile: Tile): void {
    if (this.val === null) {
      this.val = fromTile.val;
    } else {
      this.val += fromTile.val;
    }
    fromTile.val = null;
  }

  random() {
    const idx: number = randomNum(0, 1);
    return [2, 4][idx];
  }
}

export default Tile;
