function date_diff_indays(x,y){
  var day1 = new Date(x).getTime();
  var day2 = new Date(y).getTime();
  var result = (day1-day2)/86400000;
  return result;
}
console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014'));