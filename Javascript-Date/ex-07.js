function is_weekend(x){
  var y = new Date(x).getDay();
  return ( y == 0 || y == 6) ? "weekend" : "undefined";
}
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));