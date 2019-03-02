import randomNum from './randomNumber';

class Tile {
  val: number;

  constructor(val = null) {
    this.val = val;
  }

  merge(fromTile: Tile): void {
    if (this.val === null) {
      this.val = fromTile.val;
    } else if (this.val === fromTile.val) {
      this.val *= 2;
    } else {
      throw 'You can not merge these tiles';
    }
    fromTile.val = null;
  }

  random() {
    if (this.val !== null) throw 'Tile already has a number';
    const idx: number = randomNum(0, 1);
    this.val = [2, 4][idx];
    return this.val;
  }
}

export default Tile;
