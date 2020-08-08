function check(b,n){
  var result = 1;
  if (n === 0){
    return 1;
  }else{
    for (var i = 1; i <= n; i++){
      result *=b;
    }
  }
  return result;
}
check(3,2)