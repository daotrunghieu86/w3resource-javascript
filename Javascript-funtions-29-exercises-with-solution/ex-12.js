function check(x){
  var divisor = [];

  for (var i = 1 ; i <= x/2; i++){
    if (x%i === 0){
      divisor.push(i);
    }
  }
  //  return divisor;
  var sum = 0;
  for (var i = 0; i < divisor.length; i++){
    sum += divisor[i];
  }

  if (sum === x && ((sum+x)/2) === x ){
    return true;
  }else{ return false;}
}
console.log(check(6));
console.log(check(1));
console.log(check(2));
console.log(check(28));