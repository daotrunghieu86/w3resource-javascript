function calculate_age(birth){
  var curr = new Date();
  var a = curr.getTime();
  var b = birth.getTime();
  var result = (a-b)/(1000*60*60*24*365);
  return result.toFixed(2);
}
console.log(calculate_age(new Date(1982, 11, 4)));
console.log(calculate_age(new Date(1997, 6, 8)));