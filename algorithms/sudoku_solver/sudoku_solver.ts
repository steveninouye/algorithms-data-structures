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

export const getGrid = (row: number, col: number): number => {
  if (row < 3) {
    if (col < 3) {
      return 0;
    } else if (col < 6) {
      return 1;
    } else {
      return 2;
    }
  } else if (row < 6) {
    if (col < 3) {
      return 3;
    } else if (col < 6) {
      return 4;
    } else {
      return 5;
    }
  } else {
    if (col < 3) {
      return 6;
    } else if (col < 6) {
      return 7;
    } else {
      return 8;
    }
  }
};

export const forEachRowSibling = (
  board: number[][],
  row: number,
  cb: Function
): void => {
  for (let el of board[row]) {
    cb(el);
  }
};

export const forEachColSibling = (
  board: number[][],
  col: number,
  cb: Function
): void => {
  for (var row = 0; row < board.length; row++) {
    cb(board[row][col]);
  }
};

export const forEachGridSibling = (
  board: number[][],
  col: number,
  cb: Function
): void => {};

export const forEachSibling = (
  board: number[][],
  { row, col }: { row: number; col: number },
  cb: Function
): void => {
  forEachRowSibling(board, row, cb);
  forEachColSibling(board, col, cb);
  forEachGridSibling(board, col, cb);
};

export const getPossibilities = (board: number[][]): void => {
  for (var row = 0; row < board.length; row++) {
    for (var col = 0; col < board[row].length; col++) {
      if (!board[row][col]) {
        forEachSibling(board, { row, col }, () => {
          console.log('work on me now! haha');
        });
      }
    }
  }
};

export const solveSudoku = (board: number[][]): void => {};
