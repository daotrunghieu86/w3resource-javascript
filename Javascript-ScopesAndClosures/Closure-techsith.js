// So what is closure in javascript?
// "whenever you declare a function inside another function, the inside function(s) is/are recreated again each time the outside function is called"

// "Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created."

// The case 1
let x = 3;
function add() {
    // x = 4;
    let inner = 3;
    return x + inner;
}

console.dir(add); // nó vẫn sử dụng x = 3. Vì nó sử dụng biến x = 5 trước khi nó được đồng bộ với việc thay đổi x = 5. Có thể nhìn thấy x = 5 trong Scopes[0] của nó
console.dir(add()); //6

x = 5;
console.dir(add); // đương nhiên x = 5
console.dir(add()); //8

// The case 2
let addTo = function (passed) { // outer function 

    let add = function (inner) { // inner function
        return passed + inner;
    }
    // return add(4); // NaN
    return add; // trả về hàm add(inner){}
}

console.dir(addTo(4)); // return NaN or function add(inner){} // nhận passed = 4 (closure)

let addThree = new addTo(3); // trả về hàm add(inner){} ==> addthree = add(inner){}
let addFour = new addTo(4); // trả về hàm add(inner){} ==> addFour = add(inner){}
console.log(addThree(1)); // 4
console.log(addFour(0)); // 4