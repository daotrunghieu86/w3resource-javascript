function min_date(all_dates){
  var min_date = all_dates[0];
  var min_new = new Date(min_date);
  all_dates.forEach(function(curr, index){
    if (min_new > new Date(curr)){
      min_date = curr;
      min_new = new Date(curr);
    }
  });
  return min_date;
}
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));