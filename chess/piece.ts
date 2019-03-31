import { Board } from './board';

type Pos = { row: number; col: number };
type PosDelta = { rowDelta: number; colDelta: number };

export class Piece {
  color: string;
  board: Board;
  pos: Pos;
  validMoves: Pos[];
  maxMoves: number;

  constructor(color: string, board: Board, row: number, col: number) {
    this.color = color;
    this.board = board;
    this.pos = { row, col };
    this.validMoves = [];
  }

  move() {}

  getValidMoves() {
    this.validMoves = [];
    this.findAllMoves();
    this.filterMoves();
    return this.validMoves;
  }

  findAllMoves(pos: Pos, posDelta: PosDelta, maxMoves = this.maxMoves): void {
    const { row, col } = pos;
    if (
      this.board[row][col].instanceOf(Piece) ||
      [row, col].some((el) => el < 0 || el > 8)
    )
      return;
    const { rowDelta, colDelta } = posDelta;
  }

  filterMoves() {}
}
