// Create Object - basic
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2
  },
  draw: function() {
    console.log("Basic object");
  }
};
circle.draw(); // Basic object

// FACTORY Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("Factory function");
    }
  };
}
const circleFactory = createCircle(2);
circleFactory.draw(); //Factory function
console.log(circleFactory.constructor); // f Object() { [native code] } || [Function: Object] - nó là built-in contructor function được javascript engine dịch ra giống như các built-in khác như: new String(), new Boolean(), new Number()...
//
//
//
//

// CONSTRUCTOR Function
// Tất cả các object trong javascript đều có 1 thuộc tính là: 'Contructor' and that references the function that was used to create an Object
function Circle(radius) {
  console.log(`this: ${this}`);
  this.radius = radius;
  this.draw = function() {
    console.log("Contructor funtion");
  };
}

// const circleContructor = Circle(3); // this: Window object
const circleContructor = new Circle(3); // this: Circle object
circleContructor.draw(); // Contructor function
console.log(circleContructor.constructor); // [Function: Circle]
// ƒ Circle(radius) {
//   console.log(`this: ${this}`);
//   this.radius = radius;
//   this.draw = function() {
//     console.log("Contructor funtion");
//   };
// }
//
//
//

// FUNCTION are object
function CircleFunctionObject(radius) {
  // ^^^ là nó
  this.radius = radius;
  this.draw = function() {
    console.log("Funtion are Object");
  };
}

CircleFunctionObject.call({}, 1);
CircleFunctionObject.app({}, [1]);
const CircleOther = new CircleFunctionObject(1);
// 2 cách là giống nhau, vì 'new' cũng chỉ là khởi tạo một 'object' mới như khi ta gọi call() hay app() method

// CircleFunctionObject.call({ window }, 1);
// const CircleOther = CircleFunctionObject(1);
// khi bỏ từ khóa 'new' và call() gán object mới là 'window'. Như nhau cả :)))

console.log(CircleFunctionObject.constructor); // f Function() [ {native code} ] || [Function: Function]. Nó là cái hàm mà ta tạo ra functioin CircleFunctionObject
// như vậy là "CircleFunctionObject.constructor" trả về constructor giống với khi ta create một Object

// làm cách khác để thấy được FUNCTION are object
// const CircleFunctionObject2 = new Function(
//   "radius",
//   `
// this.radius = radius;
// this.draw = function() {
//   console.log("Funtion are Object");
// };
// `
// );
// const circle2 = new CircleFunctionObject2(1);
// cosole.log(circle2);
