var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];

function test(){

  var arr = [];
  var i = 0;
  while( i < array1.length && i < array2.length){
    arr.push(array1[i] + array2[i]);
    i++;
  }

  if (array1.length > array2.length){
    for ( var j = array2.length; i < array1.length; i++){
      arr.push(array1[i]);
    }
  }else{
    for (var i = array1.length; i < array2.length; i++){
      arr.push(array2[i]);
    }
  }
  return arr;
}
test();

///////

var array1 = [1,0,2,3,4],
    array2 = [3,5,6,7,8,13,9,1], arr = [];
function test(){
  if (array1.length > array2.length){
    for (var i = 0; i < array1.length; i++){
      if (array2[i] == undefined){
        array2[i] = 0;
      }
      arr.push(array1[i] + array2[i]);
    }
  }else{
    for (var i = 0; i < array2.length; i++){
      if (array1[i] == undefined){
        array1[i] = 0;
      }
      arr.push(array1[i] + array2[i]);
    }
  }
  return arr;
}
test();

/////////


function test(array1, array2){
    let l = Math.max(array1.length, array2.length);
    for (var i = 0; i < l; i++){
      if (array1[i] == undefined){
        array1[i] = 0;
      }
      // thay lenh if bang array1[i] = array1[i] || 0;
      if (array2[i] == undefined){
        array2[i] = 0;
      }
      // thay lenh if bang array2[i] = array2[i] || 0;
      array1[i] = array1[i]+array2[i];
    }
    return array1;
  }
  var array1 = [1,0,2,3,4],
      array2 = [3,5,6,7,8,13,9,1];
  console.log(test(array1, array2));
  