function test1(x){
  var result = [];
  for (var i = 0; i < x.length; i++){
    if (/[a-z]/.test(x[i])){
      result.push(x[i].toUpperCase());
    }
    else if(/[A-Z]/.test(x[i])){
      result.push(x[i].toLowerCase());
    }else{
    	result.push(x[i]);
    }
  }
  return result.join("");

}
var x = "The Quick Brown Fox";
test1(x);

////////

function test(x){
  var result = [];
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < x.length; i++){
    if (upper.indexOf(x[i]) !== -1){
      result.push(x[i].toLowerCase());
    }else if(lower.indexOf(x[i]) !== -1){
      result.push(x[i].toUpperCase());
    }else{
      result.push(x[i]);
    }
  }
  return result.join("");
}
var x = "The Quick Brown Fox";
test(x);