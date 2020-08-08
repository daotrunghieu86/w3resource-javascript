
// =====================
// Lexical scoping
// ==========

// This is an example of lexical scoping, which describes how a parser resolves variable names when functions are nested. 
// Nested functions have access to variables declared in their outer scope.

function init() {
    let name = 'hieu'; // name is a located variable created by init
    function showName() { // showName() is the inner function, a closure
        console.log(name); // use variable of the parent function
    }
    showName();
}
// console.log(init());

// ==================
// Closure
// ==========
// A closure is the combination of a function and the lexical environment within which that function was declared. 

// Example 1
function makeClosure() {
    var name = 'Hieu';
    function showName() {
        // console.log(name);
        return name;
    }
    return showName;
}

let Closure = makeClosure();
// console.log(Closure()); // Hieu
// console.log(Closure);
// ƒ showName() {
// console.log(name);
//     return name;
// }


let Closure1 = new makeClosure();
// console.log(Closure1()); // Hieu
// console.log(Closure1);
// ƒ showName() {
// console.log(name);
// return name;
// }

// Example 2
function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}
let makeAdder1 = makeAdder(1); // makeAdder1 is a closure
let makeAdder2 = makeAdder(2); // makeAdder2 is a closure

// console.log(makeAdder1(1)); // 2
// console.log(makeAdder2(2)); // 4

// Example 3 
function callbackClosure() {
    let x = 2;
    let y = 1;
    return hieu(x, y); // sử dụng callback thì cần gán biến x,y vào vì chúng chỉ có thể sử dụng trong block của callbackClosure. Nếu không sẽ lỗi "x is not defined"

    // return function hieu() {     // còn cách này thì dùng như bt khi nó trả về 1 inner  function của callbackClosure
    //     return x + y;
    // };
}
function hieu(x, y) {
    x++;
    return x + y;
}

console.log(callbackClosure());
let callbackAndClosure = callbackClosure(); // 4
console.log(callbackAndClosure); // 4
