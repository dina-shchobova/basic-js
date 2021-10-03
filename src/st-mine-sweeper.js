import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const mtr = matrix.map(() => ([]));

  function isMine(m, n) {
    if ((m >= 0) && (m < matrix.length)) {
      if ((n >= 0) && (n < matrix[0].length)) {
        if (matrix[m][n] === true) {
          return 1;
        }
      }
    }
    return 0;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      mtr[i][j] = 0;
      mtr[i][j] += isMine(i - 1, j);
      mtr[i][j] += isMine(i + 1, j);
      mtr[i][j] += isMine(i, j - 1);
      mtr[i][j] += isMine(i, j + 1);
      mtr[i][j] += isMine(i - 1, j - 1);
      mtr[i][j] += isMine(i + 1, j + 1);
      mtr[i][j] += isMine(i - 1, j + 1);
      mtr[i][j] += isMine(i + 1, j - 1);
    }
  }
  return mtr;
}
