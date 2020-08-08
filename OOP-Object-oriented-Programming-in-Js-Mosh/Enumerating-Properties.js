function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
let newCircle = new Circle(10);

// For..of: lặp qua các giá trị của một 'iterable' như array
// For..in: lặp qua các properties của Object
for (let i in newCircle) {
  if (typeof newCircle[i] !== "function") {
    console.log(i, newCircle[i]);
  }
}

console.log(Object.keys(newCircle));
console.log(Object.getOwnPropertyNames(newCircle));

// 'in' Operator. Check name of properties in the Object or no
if ("radius" in newCircle) {
  console.log("Radius properties in newCircle Object");
}
