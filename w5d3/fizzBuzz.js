function fizzBuzz(array) {
  return array.filter(el => {
    return (el % 3 === 0 || el % 5 === 0) && !(el % 15 === 0);
  })
}

console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,15]))
