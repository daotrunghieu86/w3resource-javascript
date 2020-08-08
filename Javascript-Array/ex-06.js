function test(x){
  var result = [];
  for (var i = 0; i < x.length; i++){
    if (x[i]%2 == 0 && x[i+1]%2 == 0){
      result.push(x[i],"-");
    }else{
      result.push(x[i]);
    }
  }
  result = result.join("");
  return result;
}
test("025468");

//////

function test(x){
  var result = [];
  for (var i = 0; i < x.length; i++){
    result.push(x[i]);
    if (x[i]%2 == 0 && x[i+1]%2 == 0){
      result.push("-");
    }
  }
  result = result.join("");
  return result;
}
test("025468");