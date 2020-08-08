function check(x){
  var result = {};
  x.replace(/\S/gi,
    function(k){
      result[k] = (isNaN(result[k]) ? 1 : result[k] + 1);
    });
  return result;
}
check("The quick brown fox jumps over the lazy dog")