function is_creditCard(x){
    var y = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
    return y.test(x);
  }
  console.log(is_creditCard("3782 8224 6310 006"));
  console.log(is_creditCard("3782 8224 6310 0063"));
  