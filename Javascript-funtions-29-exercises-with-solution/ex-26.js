function test(char){
    var result = "";
    while(char.length > 0){
      for (var i = 0; i < char.length; i++){
        var part = char.substring(i, char.length);
        if (duplicate(part) && (part.length > result.length)){
          result = part;
        }
      }
      char = char.substring(0,char.length-1);
    }
    return result;
  }
  console.log(test('the wicked fox')); // wicked fox
  console.log(test('https://www.w3resource.com')); // .w3resou

  
  function duplicate(string){
    let kq = true;
    for (var c of string){
      if (string.indexOf(c) !== string.lastIndexOf(c)){
        kq = false;
        break;
      }
    }
    return kq;
  }