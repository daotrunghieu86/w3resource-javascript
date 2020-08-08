function check(x){
  return x.reduce((max,currentValue) => max.length < currentValue.length ? max = currentValue : currentValue);
}
console.log(check(["Australia", "Germany", "United States of America"]))