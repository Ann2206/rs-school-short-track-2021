function getMatrixElementsSum(matrix) {
  var arr0 = [];
  var sum = [];
  var result = 0;
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
