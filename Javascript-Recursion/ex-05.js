function compute(x,n){
    if (n===1){
      return x;
    }
    return /*y =*/ x*compute(x,n-1);
  }
  compute(3,1)
