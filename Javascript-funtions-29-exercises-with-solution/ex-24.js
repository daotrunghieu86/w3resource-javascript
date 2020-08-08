function check(x){
  for (var i = 0 ; i < x.length; i++){
    for (var j = i + 1; j < x.length; j++){
      if (x[i] < x[j]){
        var m = x[i];
        x[i] = x[j];
        x[j] = m;
      }
    }
  }
  return x;
}
console.log(check([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))