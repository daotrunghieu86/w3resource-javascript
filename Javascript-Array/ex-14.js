function filter(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++){
    if (result.indexOf(arr[i]) == -1){ 
    	// tương tự với incluce
      result.push(arr[i]);
    }
  }
  return result;
}
const arr = [1, 2, 2, 5, 7, 4, 7, 9, 10, 11, 9];
console.log(filter(arr)); /* [1, 2, 5, 7, 4, 9, 10, 11] */

///////

function test(x){
  var result = x.filter((current, index, arr) =>{
    return index == arr.indexOf(current);
  });
  return result;
}
x = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
test(x)

//////////

function test(arr){
  arr = arr.sort((a,b) => a-b);
  for (var i = 0; i < arr.length; i++){
    if (arr[i] == arr[i+1]){
      arr.splice(arr[i+1],1);
    }
  }
  return arr;
}
arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
test(arr);

//////////

var arr = [1, 1, 1, 5, 5, 0, 5, 4, 4, 4, 8, 8];
function test(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
      if(arr[i] == arr[j]){
        arr.splice(j,1);
        j--;
      }
      
    }
  }
  return arr;
}
console.log(test(arr));