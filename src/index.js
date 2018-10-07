function findPossibleEntry(matrix, row, col, nums) {
  let startX = Math.floor(row / 3) * 3;
  let startY = Math.floor(col / 3) * 3;
  for (let i = 0; i < 9; i++) {
    nums = nums.filter(item =>
      item !== matrix[i][col] && 
      item !== matrix[row][i] && 
      item !== matrix[startX + i % 3][startY + Math.floor(i / 3)]);
  }
  return nums;
}

module.exports = function solveSudoku(matrix) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let possibilities;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {
        possibilities = findPossibleEntry(matrix, row, col, nums);
      } else {
        continue;
      }
      for (var i = 0; i < possibilities.length; i++) {
        matrix[row][col] = possibilities[i];
        if (solveSudoku(matrix)) {
          return matrix;
        }
      }
      matrix[row][col] = 0;
      return false;
    }
  }
  return matrix;
}