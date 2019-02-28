import Board from './board';

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
      const direction = this.getDirection();
      this.board.move(direction);
      this.board.render();
      this.isGameOver = this.board.addNewTile();
    }
    this.renderGameResult()
  }

  getDirection() {
    console.log('What direction would you like to move?:');
    return 'right';
  }

  renderGameResult(){
    
  }
}

export default Game;
