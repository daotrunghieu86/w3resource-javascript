function circle(radius){
  this.area = function(){
    return Math.PI*radius*radius;
  }	
  this.perimeter = function(){
    return 2*Math.PI*radius;
  }
}
var c = new circle(3);
console.log(c.area().toFixed(2));
console.log(c.perimeter().toFixed(2));