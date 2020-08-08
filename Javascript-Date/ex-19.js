function day_of_the_month(d){
  return ((d.getDate()) ? "0" : "") + d.getDate();
}
// d= new Date(2015, 10, 1); 
d = new Date();
console.log(day_of_the_month(d));