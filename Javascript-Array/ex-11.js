function test(x){
  var sum = 0;
  for (var i = 0; i < x.length; i++){
    sum += x[i]*x[i];
  }
  return sum;
}
console.log(test([0,1,2,3,4]))

///////////

function test(x){
  var sum = 0;
  var i = x.length-1;
  while (i >= 0){
    sum += Math.pow(x[i],2);
    i--;
  }
  return sum;
}
console.log(test([0,1,2,3,4]))

//////////

function sumSquares(arr){
return arr.reduce((c,el)=>c + el*el,0);
}
console.log(sumSquares([4, 3, 1]));

//////////

function test(x){
  return x.map(e => Math.pow(e,2)).reduce((total, currentValue) => total + currentValue);
}
console.log(test([1,2,3]))
