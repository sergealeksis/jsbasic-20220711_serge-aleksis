function getMinMax(str) {
  let result = {}
  let newStr = str.split(' ')
    .filter(item => parseFloat(item));
    
  result.min = Math.min(...newStr);
  result.max = Math.max(...newStr);
 
  return result
}
