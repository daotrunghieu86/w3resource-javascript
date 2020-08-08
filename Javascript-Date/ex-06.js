function test(x,y){
  x.setMinutes(y);
  return x.toString();
}
console.log(test(new Date(2014,10,2), 30))

//////

function add_minutes(x, y){
  return new Date(x.getTime() + y*60000);
}
console.log(add_minutes(new Date(2014,10,2), 30).toString());