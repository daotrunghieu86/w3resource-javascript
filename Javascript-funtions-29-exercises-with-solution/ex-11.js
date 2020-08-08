function check(x){
  var arr = x.sort(function(a,b){return a-b});
  console.log("the second lowest number: " + arr[arr.length-2]);
  console.log("the second greatest number: " + arr[1]);
}
check([4,23,7,3,74]);