/*
https://leetcode.com/problems/sudoku-solver/
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Empty cells are indicated by the character '.'.


A sudoku puzzle...


...and its solution numbers marked in red.

Note:

The given board contain only digits 1-9 and the character '.'.
You may assume that the given Sudoku puzzle will have a single unique solution.
The given board size is always 9x9.
*/
type Board = number[][] | number[][][];
type Tile = number[] | number;
type RowCol = { row: number; col: number };

export const forEachRowSibling = (
  board: Board,
  row: number,
  cb: Function
): void => {
  for (let el of board[row]) {
    cb(el);
  }
};

export const forEachColSibling = (
  board: Board,
  col: number,
  cb: Function
): void => {
  for (var row = 0; row < board.length; row++) {
    cb(board[row][col]);
  }
};

export const forEachGridSibling = (
  board: Board,
  { row, col }: RowCol,
  cb: Function
): void => {
  const rowStart = row - (row % 3);
  const colStart = col - (col % 3);
  for (var rowIdx = rowStart; rowIdx < rowStart + 3; rowIdx++) {
    for (var colIdx = colStart; colIdx < colStart + 3; colIdx++) {
      cb(board[rowIdx][colIdx]);
    }
  }
};

export const forEachSibling = (
  board: Board,
  { row, col }: RowCol,
  cb: Function
): void => {
  forEachRowSibling(board, row, cb);
  forEachColSibling(board, col, cb);
  forEachGridSibling(board, { row, col }, cb);
};

export const getPossibilities = (board: Board, { row, col }: RowCol): void => {
  const tile = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  board[row][col] = tile;
  forEachSibling(board, { row, col }, (val: Tile) => {
    if (typeof val === 'number') {
      const valIdx = tile.indexOf(val);
      if (valIdx > -1) tile.splice(valIdx, 1);
    }
  });
};

export const forEachTile = (board: Board, cb: Function): void => {
  for (var row = 0; row < board.length; row++) {
    for (var col = 0; col < board[row].length; col++) {
      cb(board[row][col], row, col);
    }
  }
};

export const assignPossibilitiesToTiles = (board: Board): void => {
  forEachTile(board, (tile: Tile, row: number, col: number) => {
    if (!board[row][col]) {
      getPossibilities(board, { row, col });
    }
  });
};

export const findTileWithLeastPossibilities = (
  board: Board
): { tile: number[]; row: number; col: number } => {
  let minTile = { tile: new Array(10), row: 0, col: 0 };
  forEachTile(board, (tile: Tile, row: number, col: number) => {
    if (typeof tile !== 'number') {
      if (minTile.tile.length > tile.length) {
        minTile = { tile, row, col };
      }
    }
  });
  return minTile;
};

export const addValueToTile = (
  board: Board,
  { row, col }: RowCol,
  val: number
) => {
  board[row][col] = val;
  forEachSibling(board, { row, col }, (tile: Tile) => {
    if (typeof tile !== 'number') {
      const valIdx = tile.indexOf(val);
      if (valIdx > -1) tile.splice(valIdx, 1);
    }
  });
};

export const removeValueFromTile = (
  board: Board,
  { row, col }: RowCol,
  val: number
) => {
  board[row][col] = val;
  forEachSibling(board, { row, col }, (tile: Tile) => {
    if (typeof tile !== 'number') {
      tile.push(val);
    }
  });
};

export const solve = (board: Board): boolean => {
  const { tile, row, col } = findTileWithLeastPossibilities(board);
  if (tile.length === 10) return true;
  if (tile.length === 0) return false;
  for (var i = 0; i < tile.length; i++) {
    const val = tile[i];
    addValueToTile(board, { row, col }, val);
    const result = solve(board);
    if (result === true) return true;
    removeValueFromTile(board, { row, col }, val);
  }
  board[row][col] = tile;
  return false;
};

export const solveSudoku = (board: Board): void => {
  assignPossibilitiesToTiles(board);
  solve(board);
};
