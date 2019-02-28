const randValue = () => {
  const randNum = Math.floor(Math.random() * 2);
  return [2, 4][randNum];
};

class Tile {
  val: number;
  row: number;
  col: number;

  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.val = null;
  }
}

export default Tile;
