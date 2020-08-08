function test(x){
  for (var i in x){
    console.log("row " + [i]);
    for (var j in x[i]){
      console.log(x[i][j]);
    }
  }
}
var x = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
test(x);

////////

function test(x){
  for (var i = 0; i < x.length; i++){
    console.log("row " + [i]);
    for (var j = 0; j < x[i].length; j++){
      console.log(x[i][j]);
    }
  }
}
var x = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
test(x);