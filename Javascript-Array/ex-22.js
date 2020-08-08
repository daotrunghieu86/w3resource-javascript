function test(arr1, arr2){
    for (var i of arr2){
      if (arr1.indexOf(i) == -1){
        arr1.push(i);
      }
    }
    return arr1;
  }
  console.log(test([1, 2, 3, 4], [100, 2, 1, 4, 10]));

  ////////

  function test(arr1, arr2){
    var obj = {};
    for (var i = 0; i < arr1.length; i++){
      obj[arr1[i]] = arr1[i];
    }
    for (var j = 0; j < arr2.length; j++){
      obj[arr2[j]] = arr2[j];
    }
    var result = [];
    for (var value in obj){
      if (obj.hasOwnProperty(value)){
        result.push(obj[value]);
      }
    }
    return result;
  }
  console.log(test([1, 2, 3], [100, 2, 1, 10]));