function min_date(x){
  var a = new Date(x[0]).getTime();
  var b = new Date(x[1]).getTime();
  var c = new Date(x[2]).getTime();
  if (a-b > 0 && a-c > 0){
    return x[0];
  }else if(b-a > 0 && b-c > 0){
    return x[1];
  }else {
    return x[2];
  }
}
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));

//////////

function max_date(all_dates){
  var date_max = all_dates[0];
  var max = new Date(date_max);
  all_dates.forEach(function(curr, index){
    if (new Date(curr) > max){
      max = new Date(curr);
      date_max = curr;
    }
  });
  return date_max;
}
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));