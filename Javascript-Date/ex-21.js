function long_Days(dt){
  var list = ["sunday", "monday", "tuesday", "wednesday", "thursday","friday", "saturday"];
  var day = dt.getDay();
  return list[day];
}
dt = new Date(2015, 10, 1); 
console.log(long_Days(dt));