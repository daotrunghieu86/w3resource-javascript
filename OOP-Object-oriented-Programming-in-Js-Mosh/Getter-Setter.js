function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 1 };

  this.draw = function() {
    console.log("draw");
  };

  // Adding or changing an object property
  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location");
      }
      defaultLocation = value;
    }
  });
}

const newCircle = new Circle(2);
newCircle.defaultLocation = 1;
console.log(newCircle.defaultLocation);
