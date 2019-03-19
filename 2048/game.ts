import Board from './Board';

class Game {
  board: Board;
  isGameOver: boolean;

  constructor() {
    this.board = null;
    this.isGameOver = false;
  }

  run() {
    this.board = new Board(4, 4);
    while (!this.isGameOver) {
      this.board.render();
      const direction: string = this.getDirection();
      this.board.move(direction);
      this.board.render();
      this.isGameOver = this.board.addNewTile();
    }
    this.renderGameResult()
  }

  getDirection() {
    console.log('What direction would you like to move?:');
    // TODO: get direction from player
    return 'right';
  }

  renderGameResult(){
    // TODO: render game result
  }
}

export default Game;
