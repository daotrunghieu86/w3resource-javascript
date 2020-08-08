function count_day(date){
  var year = date.getFullYear();
  var bg = new Date(year, 0, 0);
  return (date-bg)/86400000;
}
console.log(count_day(new Date(2015, 0, 15)));
console.log(count_day(new Date(2015, 11, 14)));