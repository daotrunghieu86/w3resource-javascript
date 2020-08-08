function english_ordinal_suffix(dt){
  var today = dt.getDate();
  if (today >= 4){
    return today + "th";
  }else {
    switch(today){
      case 1:
        return "1st";
        break;
      case 2:
        return "2nd";
        break;
      case 3:
        return "rd";
        break;
    }
  }
}
dt = new Date(2015, 10, 7); 
console.log(english_ordinal_suffix(dt));

////////

function test(dt){
  var list = ["th","st", "nd", "rd"];
  var day = dt.getDate();
  if (day > 3){
    return day + list[0];
  }else{
    return day + list[day];
  }
}
dt = new Date(2015, 10, 4); 
console.log(test(dt));