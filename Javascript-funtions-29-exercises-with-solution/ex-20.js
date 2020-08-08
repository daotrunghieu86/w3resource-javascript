function check(x){
  var result = [];
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      count = char_list.length;
  for (var i = 0; i < x; i++){
    result.push(char_list.charAt(Math.floor(Math.random() * count)));
  }
  return result.join("");
}
console.log(check(5));