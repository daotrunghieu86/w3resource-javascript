function test(x){
  var result = x.getMonth() +1;
  switch(result){
    case 1:
    return "January";
    case 2:
    return "Fabrury";
    case 3:
    return "March";
    case 4:
    return "Aiple";
    case 5:
    return "May";
    case 6:
    return "June";
    case 7:
    return "July";
    case 8:
    return "August";
    case 9:
    return "September";
    case 10:
    return "October";
    case 11:
    return "November";
    case 12:
    return "December";
  }
}
console.log(test(new Date("10/11/2009")));
console.log(test(new Date("11/13/2014")));

/////////////

function month_name(x){
  var list = ["january", "february", "march", "april", "may", "june", "july", "august", "september","october", "november", "december"];
  return list[x.getMonth()];
}
console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));