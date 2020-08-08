function check(x){
  for (var i = 0 ; i < x ; i++){
    for (var j = 0; j < x; j++ ){
      if (i===j){
        console.log("1");
      }else{
        console.log("0");
      }
    }
    console.log("----------");
  }
}
check(4);