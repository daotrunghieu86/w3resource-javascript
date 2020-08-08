function test(x){
  var x = x.join();
  var y = x.replace(/,/g,"+");
  console.log(x);
  console.log(y);
}
var x = ["Red", "Green", "White", "Black"];
console.log(test(x));
