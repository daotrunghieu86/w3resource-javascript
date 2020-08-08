var str = "abacvddbee",
    count = 0;
  for (var i = 0; i < str.length; i++){
    count = str.match(new RegExp(str[i],"gi")).length;
    if (count == 1){
      console.log(str[i]);
      break;
    }
  }