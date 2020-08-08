function check(x){
  var arr = [];
  for (var i = 1; i <= x; i++){
    if (x%i === 0){
      arr.push(i);
    }
  }
  return arr;
}
console.log(check(15))
console.log(check(16))
console.log(check(17))