function test(){
  var result1 = [];
  var result2 = [];
  var d = new Date();
  result1.push((d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear());
  result2.push((d.getMonth()+1) + "-" + d.getDate() + "-" + d.getFullYear());
  console.log(result1.toString());
  console.log(result2.toString());
}
test();

///////

function test(x){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return (mm + x + dd + x + yyyy);
}
console.log(test("-"));
console.log(test("/"));