function test(x){
  var result=1;
  var var_re = "";
  for (var i = 0; i < x.length ; i++){
    var count = 0;
    var value = "";
    for (var j = i; j < x.length ; j++){
      if (x[i] == x[j]){
        count++;
        value = x[i]
      }
    }
    if (count >= result){
      result = count;
      var_re = value;
    }
  }
  console.log("Number: "+var_re+" frequency: "+result);

}
var x=[3, 'a', 'a', 'a', 2, "a", 'b', 3, 'b', 2, 4, 9, 3];
test(x);

//////////

