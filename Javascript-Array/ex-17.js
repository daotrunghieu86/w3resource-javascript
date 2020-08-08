
function test(x) {
  var y = x.length, index, temp;
  while (y > 0) {
    index = Math.floor(Math.random() * y);
    y--;
    temp = x[y];
    x[y] = x[index];
    x[index] = temp;
  }
  return x;
}
test([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

////////

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))