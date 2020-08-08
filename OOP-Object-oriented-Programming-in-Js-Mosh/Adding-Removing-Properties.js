function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
let newCircle = new Circle(10);

// Add new properties
// có 2 cách:
newCircle.location = "local brand";
// newCircle.['location'] = 'local brand';
console.log(newCircle);

// Delete Properties
// có 2 cách:
// delete newCircle.location;
delete newCircle["location"];
