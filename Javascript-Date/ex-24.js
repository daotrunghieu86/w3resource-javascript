function test(dt){
  var year = dt.getFullYear();
  var begin_day = new Date(year, 0, 0);
  return Math.ceil(((dt - begin_day)/(86400000))/7);
}
dt = new Date(2015, 10, 1); 
console.log(test(dt)); 