function test(x){
  return (Object.prototype.toString.call(x) == "[object Date]") ? true : false;
}
console.log(test("October 13, 2014 11:13:00"));
console.log(test(new Date(86400000)));
console.log(test(new Date(99,5,24,11,33,30,0)));
console.log(test([1, 2, 4, 0]));