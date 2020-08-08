function yesterday(x){
  var y = new Date(x);
  var z = y.getTime() - 86400000;
  return new Date(z);
}
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));

///////

function yesterday(x){
  var y = new Date(x);
  return new Date(y.setDate(y.getDate()-1)).toString();
}
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));