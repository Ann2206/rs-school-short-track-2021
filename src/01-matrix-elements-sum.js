/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 * @param {Array<Array>} matrix
 * @return {Number}
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let arr0 = [];
  let sum = [];
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!arr0.includes(j)) {
        sum.push(matrix[i][j]);
      }
    }
    arr0 = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        arr0.push(j);
      }
    }
  }
  for (let i = 0; i < sum.length; i++) {
    result += sum[i];
  }
  return result;
}
module.exports = getMatrixElementsSum;
