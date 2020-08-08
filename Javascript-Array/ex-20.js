function test(arr){
    var result = [];
    for (var i = 0; i < arr.length-1; i++){
      for (var j = i+1; j < arr.length; j++){
        if (arr[i] == arr[j] && result.indexOf(arr[i]) == -1){
          result.push(arr[i]);
        }
      }
    }
    return result;
  }
  console.log(test([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));
  
  ////////

arr = [1,0,'a',-3,0,2,'b',-3, 3,-6,3,4,1,'a'];
var sort = arr.sort();
// console.log(sort);
var result = [];
for (var i = 0; i < arr.length-1; i++){
if (arr[i] == arr[i+1]){
    result.push(arr[i]);
}
}
console.log(result);