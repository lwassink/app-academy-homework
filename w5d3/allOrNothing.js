function allOrNothing() {
  mod = arguments[0];
  for (i = 1; i < arguments.length; i++){
    if (!(arguments[i] % mod == 0)){
      return false;
    }
  }
  return true;
}

console.log(allOrNothing(3, 9, 12, 6))
console.log(allOrNothing(5, 1, 2, 10))
