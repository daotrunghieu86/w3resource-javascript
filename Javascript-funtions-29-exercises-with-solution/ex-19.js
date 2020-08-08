function check(x,n){
  var result = [];
  for ( var i = 0; i < x.length ; i++){
    if (x[i] > n){
      result.push(x[i]);
    }
  }
  return result;
}
check([3,5,2,56,12,56,23,22],7)