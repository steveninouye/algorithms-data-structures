import Board from '../board';
import Tile from '../tile';

describe('Board', () => {
  it('should be defined', () => {
    expect(Board).toBeDefined();
  });

  let board1: Board, board2: Board, smallBoard: Board;

  beforeEach(() => {
    board1 = new Board();
    board2 = new Board(2, 6);
    smallBoard = new Board(2, 2);
  });

  describe('#constructor', () => {
    it('should initialize with default width and height of 4', () => {
      expect(board1.height).toBe(4);
      expect(board1.width).toBe(4);
    });

    it('should receive a board size', () => {
      expect(board2.height).toBe(2);
      expect(board2.width).toBe(6);
    });

    it('should should assign matrix as a "size x size" grid', () => {
      expect(board1.matrix).toHaveLength(4);
      expect(board1.matrix[0]).toHaveLength(4);
      expect(board2.matrix).toHaveLength(2);
      expect(board2.matrix[0]).toHaveLength(6);
    });

    it('should initialize score to 0', () => {
      expect(board1.score).toBe(0);
      expect(board2.score).toBe(0);
    });

    it('should add all tiles to the availalbe tiles array', () => {
      let badTiles: Tile[] = [];
      let { availableTiles, matrix } = smallBoard;
      matrix.forEach((row) => {
        row.forEach((tile) => {
          if (availableTiles.indexOf(tile) === -1) {
            badTiles.push(tile);
          }
        });
      });
      expect(badTiles).toHaveLength(0);
    });
  });

  describe('#move', () => {
    it('should change the matrix on Board after completion', () => {
      
    });

    it('should return the new total score', () => {

    });

    it('should throw error if no move was made', () => {});
  });

  describe('#getAvailablePostions', () => {
    it('should return all the available positions with x and y coordinates', () => {});
  });

  describe('#getAvailableMoves', () => {
    it('should return all the valid available moves', () => {});
  });
});
