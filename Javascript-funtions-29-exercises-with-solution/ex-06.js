function check(x){
  var arr = x.match(/\w[a-z]{0,}/gi);
  // return arr;
  var result = arr[0];
  for (var i = 1; i < arr.length ; i++){
    if (result.length < arr[i].length){
      result = arr[i];
    }
  }
  return result;
}
console.log(check("@Web Development #Tutorial"));