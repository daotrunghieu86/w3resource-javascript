function test(x){
  if (x===1){
    return x;
  }
  return x*test(x-1);
}
test(5);