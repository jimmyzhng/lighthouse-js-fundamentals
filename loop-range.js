// Function returns an array of numbers from START to END, counting by STEP
let range = function (start, end, step) {
  let array = [];
  if (start === undefined || end === undefined || step === undefined || step > end || step <= 0) {
    return array
  } else {
    for (let i = start; i <= end; i += step) {
      array.push(i)
    }
    return array;
  }
}

range(0,10,2);




