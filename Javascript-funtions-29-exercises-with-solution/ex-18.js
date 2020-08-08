function check(x,n){
  var mid = Math.floor(x.length/2), low=0, high=x.length;
  while (x[mid] !== n){
    if (x[mid] > n){
      high = mid - 1;
      mid = Math.floor((high + low)/2);
    }else{
      low = mid + 1;
      mid = Math.floor((high + low)/2);
    }
  }
  return mid;
}
 var x = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
 console.log(check(x, 14));