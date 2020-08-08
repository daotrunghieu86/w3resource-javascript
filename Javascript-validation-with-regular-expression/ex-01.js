function test(x){
    return /^[A-Z]/.test(x) ? "UpperCase" : "Not UpperCase";
//  return /[A-Z]/.test(x[0]) ? "UpperCase" : "Not UpperCase";      
}
console.log(test("Askdjfl"));
console.log(test("abcsd"));