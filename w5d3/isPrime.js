function isPrime(number) {
  for(i=2; i < number; i++){
    if (number % i === 0){
    return false
    }
  }
  return true
}

console.log(isPrime(3))
console.log(isPrime(4))

function sumOfNPrimes(n) {
  var count = 0;
  var i = 2;
  var sum = 0;

  while (count < n) {
    if (isPrime(i)) {
      sum += i;
      count++;
    }
    i++;
  }
  console.log(sum);
}

sumOfNPrimes(3);

