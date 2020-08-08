function test(x){
  if(typeof x == "string"){
    return false;
  }else{ return true;}
}
test([1,2,3])

//////////

function test(x){
  return Array.isArray(x);
}

///////////

function test(x){
 return (toString.call(x) === "[object Array]") ? true : false;
}
test("12 ")

///////////

