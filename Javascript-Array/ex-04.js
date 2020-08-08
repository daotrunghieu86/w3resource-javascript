function first(x,n){
  if(x===null){
    return x;
  }
  if(n==null){
    return x[x.length-1];
  }else if(n<0){
    return [];
  }else{
    return x.slice(-n);
  }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));