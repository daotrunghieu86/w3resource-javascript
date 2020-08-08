function first(x,n){
  if(x===null){
    return x;
  }else if(n===null){
    return x[0];
  }else if(n<0){
    return [];
  }else{
    return x.slice(0,n);
  }
}
console.log(first([7, 9, 0, -2],));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));