
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];}
     
  let i = 1;
 while ( i < matrix.length) {
    matrix[i] = matrix[i].reverse();
    i +=2;
  }
 // return matrix[1].reverse();
  return matrix.flat();
}
