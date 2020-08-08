function check(x){
  var arr_test = [Function, RegExp, Number, String, Boolean, Object], x, len;
  if (typeof x === "Object" || typeof x === "Function"){
    for (i = 0, len = x.length; i < len; i++){
      if (x instanceof arr_test[i]){
        return arr_test[i];
      }
    }
  }
  return typeof x;
}
console.log(check(12));
console.log(check('w3resource'));
console.log(check(false));