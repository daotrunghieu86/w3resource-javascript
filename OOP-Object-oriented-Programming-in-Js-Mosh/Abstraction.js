//ABSTRACTION: - Objects only reveal internal mechanisms that are relevant for the use of other objects, hiding any unnecessary implementation code. This concept helps developers make changes and additions over time more easily.

function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 1 };
  this.computeOptimumLocation = function(factor) {
    // ...
    console.log(factor);
    console.log("computeOptimumLocation");
  };
  this.draw = function() {
    this.computeOptimumLocation(3);
    console.log("draw");
  };
}

const newCircle = new Circle(2);
newCircle.draw();

newCircle.defaultLocation = false;
console.log(newCircle.defaultLocation);

// console.log(newCircle.computeOptimumLocation()); // [Function], là một method được ẩn đi.

// nếu muốn thêm tham số thì ta có thể thêm tham số 'factor' trực tiếp ở method 'computeOptimumLocation' chứ không console.log() trực tiếp như ở dòng 23. Tránh trường hợp phát sinh thêm nhiều lỗi ở trong method 'computeOptimumLocation'. Sau đó chỉ cần thêm đối sô ở trong method 'draw' tại method 'computeOptimumLocation'

// Ở đây các properties như 'defaultLocation', "computeOptimumLocation" được hiểu là ẩn đi, hiểu là một phần phức tạp phía sau của Object.
// Nó chỉ show ra cho người dùng những properties cần thiết: 'radius', 'draw' để dễ thao tác và dễ nhìn
