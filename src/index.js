
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined || matrix.length == 0) return [];
       
       matrix.reduce((accumulator, currentValue, index) => {
         currentValue = index%2 === 0 ? currentValue : currentValue.reverse()
      });
       return matrix.flat(Infinity);
    
}
  
  
