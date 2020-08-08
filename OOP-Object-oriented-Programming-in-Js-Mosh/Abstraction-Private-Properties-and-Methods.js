function Circle(radius) {
  this.radius = radius;

  // convert this method to a private method with 'let' instate of 'this'
  //   this.defaultLocation = { x: 0, y: 1 };
  let defaultLocation = { x: 0, y: 1 };

  // convert this method to a private method with 'let' instate of 'this'
  //   this.computeOptimumLocation = function(factor) {
  let computeOptimumLocation = function(factor) {
    // ...
    console.log(factor);
    console.log("computeOptimumLocation");
  };

  this.draw = function() {
    // this.computeOptimumLocation(3);
    console.log(this.radius);
    console.log(defaultLocation);
    computeOptimumLocation(3);
    console.log("draw");
  };
}

const newCircle = new Circle(2);
newCircle.draw();

// ở đây với 2 method được convert ở trên, để chuyển từ 'a public method' sang 'a private method' chúng ta cần chuyển nó sang kiểu khai báo cục bộ (dùng let, const, var) để nó chỉ có thể hoạt động trong phạm vi Function đang chứa nó.

// Có tý 'lexical scope' ở đây :))

// vì với 'this' là cách chúng ta 'public' method của chúng ta ra để mà các 'instance' được khởi tạo qua từ khóa 'new' có thể sử dụng.
