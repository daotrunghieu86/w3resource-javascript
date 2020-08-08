function check(x){
  var result = "";
  for (var i = 0; i < x.length; i++){
    if (result.indexOf(x.charAt(i)) === -1){
      result += x[i];
    } 
  }
  return result;
}
check("thequickbrownfoxjumpsoverthelazydog");