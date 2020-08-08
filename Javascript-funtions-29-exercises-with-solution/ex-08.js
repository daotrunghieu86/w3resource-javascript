function check(x){
  if (x === 1){
    return false;
  }else if (x === 2){
    return true;
  }else{
    for (var i = 2; i < Math.sqrt(x); i++){
      if (x % i === 0){
        return "khong la so nguyen to";
      }
      else{
        return "la so nguyen to";
      }
    }
  }
}
console.log(check(2));