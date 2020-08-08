function check(x){
  var count = 0;
  for (var i = 0; i < x.length ; i++){
    var patt = new RegExp("[ueoai]")
    if (patt.test(x[i])){
      count += 1;
    }
  }
  return count;
}
console.log(check('The quick brown fueoaix'));

// cach 2: 

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));
