function test(x){
  var sum = 0;
  var multiply = 1;
  for (var i=0 ; i < x.length; i++){
    sum += x[i];
    multiply *= x[i];
  }
  console.log("Sum: "+sum+", multiply: "+multiply);
}
test([1,2,3,4,5,6])

////////

function test(x){
  var sum = 0;
  var multiply = 1;
  for (var i in x){
    sum += x[i];
    multiply *= x[i];
  }
  console.log("Sum: "+sum+", multiply: "+multiply);
}
test([1,2,3,4,5,6])

//////////

function test(x){
  console.log(x.reduce((total, value) => total + value, 0));
  console.log(x.reduce((mul, value) => mul *= value, 1));
}
test([1,2,3,4,5,6])

//////////

function test(x){
  var sum = 0;
  var mul = 1;
  x.forEach(item => sum += item);
  x.forEach(item => mul *= item);
  console.log("Sum: "+sum+", multiply: "+mul);
}
test([1,2,3,4,5,6])