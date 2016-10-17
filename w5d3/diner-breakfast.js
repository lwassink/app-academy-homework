function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs";
  return function (food = null) {
    if (food != null) order += ' and ' + food;
    console.log(order + ' please');
  }
}
