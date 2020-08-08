function days_of_a_year(x){
  return (isLeapYear(x)) ? 366: 365;
  function isLeapYear(x){
    return x%400 == 0 || (x%100 !== 0 && x%4 == 0);
  }
}

console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));

///////////////

function days_of_a_year(year){
  return (new Date(year, 11, 31) - new Date(year, 0, 0))/86400000;
}
console.log(days_of_a_year(2015)); 
console.log(days_of_a_year(2016));
console.log(days_of_a_year(2012)); 

///////////

function days_of_a_year(year){
  var sum = 0;
  for (var i = 0; i < 12; i++){
    sum += new Date(year, i, 0).getDate();
  }
  return sum;
}
console.log(days_of_a_year(2015));//365
console.log(days_of_a_year(2016));//366