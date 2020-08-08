function check(obj){
  return Object.getOwnPropertyNames(obj);
  }
console.log(check(Array));
console.log(check(Math));
// above code finds methods only

// following code finds both properties and methods
function test(x){
  return Object.getOwnPropertyNames(x);
}
console.log(test(Date));