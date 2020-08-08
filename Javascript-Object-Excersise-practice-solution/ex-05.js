function cylinder(r,h){
  this.radius = r;
  this.height = h;
}
cylinder.prototype.volume = function(){
  return this.radius*this.radius*3,14*this.height;
}
var cyl = new cylinder(4,7);
console.log(cyl.volume());