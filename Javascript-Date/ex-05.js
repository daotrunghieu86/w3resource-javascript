function compare_dates(x,y){
  var x1 = x.getTime();
  var y1 = y.getTime();
  // có thể so sánh trực tiếp x với y;
  if (x1 > y1){
    return "Date1 > Date2";
  }else if (x1 < y1){
    return "Date2 > Date1";
  }else {
    return "Date1 = Date2";
  }
}
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));