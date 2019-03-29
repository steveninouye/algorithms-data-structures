import { Board } from './board';

type Pos = { row: number; col: number };

export class Piece {
  color: string;
  board: Board;
  pos: Pos;
  validMoves: Pos[];
  
  constructor(color: string, board: Board, row: number, col: number) {
    this.color = color;
    this.board = board;
    this.pos = { row, col };
    this.validMoves = [];
  }

  move() {}

  getMoves() {
    this.getAllMoves();
    this.filterMoves();
    return this.movesAvailable;
  }

  getAllMoves(pos: Pos) {}

  filterMoves() {}
}
