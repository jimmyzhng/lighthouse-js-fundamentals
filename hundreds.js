function howManyHundreds (num) {
  let remainder = num % 100 
  let byHun = num - remainder
  if (byHun / 100 < 1) {
    return 0
  } else {
      return (byHun / 100)
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);