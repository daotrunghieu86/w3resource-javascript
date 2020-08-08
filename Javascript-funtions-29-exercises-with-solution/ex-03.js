function check(x){
  var result = [];
  for (var i = 0; i <= x.length ; i++){
    // i <= x.length vì substring không lấy giá trị cuối cùng nên bị thiếu
    for (var j = i; j <= x.length; j++){
      result.push(x.substring(i,j));
    }
  }
  return result.join("\n");
}
console.log(check("motcon"))