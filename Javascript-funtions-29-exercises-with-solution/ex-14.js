function test(amount, coins){
    if (coins.length == 0){
      return [];
    }else{
      if(amount >= coins[0]){
        var left = amount - coins[0];
        return [coins[0]].concat(test(left,coins));
      }else{
        coins.shift();
        return test(amount,coins);
      }
    }
  }
  test(46, [25, 10, 5, 2, 1])