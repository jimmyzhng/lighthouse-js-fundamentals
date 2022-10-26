// When function given array and value, 
// return index of the last time the value occurs in the array
// if never occurs, return -1
let lastIndexOf = function (array, value) {
  let lastOf = -1;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === value) {
      lastOf = i
    }
  }
  return lastOf
}