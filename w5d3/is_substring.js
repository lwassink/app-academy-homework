function isSubstring(searchString, subString) {
  if(searchString.indexOf(subString) > -1) {
    return true;
  } else {
    return false;
  }
}

console.log(isSubstring("Hi there", "Hi"))
console.log(isSubstring("Hi there", "hi"))
