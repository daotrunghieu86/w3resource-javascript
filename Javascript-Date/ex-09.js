function lastday(x,y){
  return new Date(x,y+1,0).getDate()
}
console.log(lastday(2019,0));
console.log(lastday(2019,5));
console.log(lastday(2019,11));