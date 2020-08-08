function quarter_of_the_year(x){
  var y = x.getMonth()+1;
  return Math.floor(y/3);
}
console.log(quarter_of_the_year(new Date()));
console.log(quarter_of_the_year(new Date(2015, 1, 21))); 
console.log(quarter_of_the_year(new Date(2015, 10, 18)));