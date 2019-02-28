import Board from './board';

class Game {
  board: Board;

  constructor() {
    this.board = null;
  }

  run() {
    this.board = new Board(4, 4);
    while(!this.isGameOver) {
      this.board.render()
      this.board.addNewTile()
      this.board.render()
      
    }
  }

  isGameOver() {

  }
}

export default Game;
