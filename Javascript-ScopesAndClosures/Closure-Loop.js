let counter = 0;
let names = ["Bob", "Tina", "Gene", "Mort", "Louise", "Ollie"];

// Closure so we are good
names.forEach(looper);

// Closure so we are good
for (let i = 0; i < names.length; i++) {
  looper(names[i], i, names)
}

function looper(item, index, arr) {
  setTimeout(function () {
    console.log(index, item)
  }, 1000 * index);
  // this function creates the closure
  if (counter < 6) {
    console.log('forEach, ' + index + item)
  } else if (counter > 5 && counter < 12) {
    console.log('for let' + index + item)
  } else {
    console.log('for var ' + index + item);
  }
  counter++
}

// no closure. Sad face
for (var i = 0; i < names.length; i++) {
  // thay var bằng let để tận dụng đặc tính block của let thay vì function block của var.
  setTimeout(function () {
    console.log("SAD ", i, names[i]);
  }, 1000 * i);
}

for (var i = 0; i < names.length; i++) {
  // version one - works
  setTimeout(
    function (num) {
      console.log("ONE", num, this[num]);
    }.bind(names, i),
    1000 * i
  );

  // version two - works
  setTimeout(
    function (num) {
      console.log("TWO", num, names[num]);
    },
    1000 * i,
    i
  );
  // The key is to pass a copy of i into the function to be used later... the closeure
}

// it needs its own variable, with a copy of the i value at each interation
for (var i = 0; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(function timer() {
      console.log(j);
    }, 1000 * j);
  })();
}
// A slight variation some prefer is:
for (var i = 0; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, 1000 * j);
  })(i);
}
