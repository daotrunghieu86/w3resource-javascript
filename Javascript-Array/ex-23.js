function test(arr1, arr2){
    var result = [];
    for (let value of arr1){
      if (arr2.indexOf(value) == -1){
        result.push(value);
      }
    }
    for (let value of arr2){
      if (arr1.indexOf(value) == -1){
        result.push(value);
      }
    }
    return result;
  }
  console.log(test([1, 2, 3], [100, 2, 1, 10])); 