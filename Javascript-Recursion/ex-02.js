function test(x,y){
	var z = Math.min(x,y);
	var check = function(a){
		return (x%a == 0 && y%a == 0)? a : check(a-1);
	}
	return check(z);
}
test(360, 336);

// cách khác 
function mcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return mcd(b, a % b);
  }
}
console.log(mcd(338, 30))