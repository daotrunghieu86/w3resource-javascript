function test(radius){
	this.radius = radius;
	this.area = function(){
		return Math.PI*this.radius*this.radius;
	}
	this.perimeter = function(){
		return 2*Math.PI*this.radius;
	}
}
var x = new test(3);
console.log(x.area().toFixed(2));
console.log(x.perimeter().toFixed(2));