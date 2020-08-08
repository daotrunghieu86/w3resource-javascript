Array.prototype.findFibonaccy = function(num){
    var half = Math.floor(this.length/2);
    if (this[half] == num){
        return half;
    }
    if (this[half] < num){
        return half + this.slice(half, this.length).findFibonaccy(num);
    }else{
        return this.slice(0,half).findFibonaccy(num);
    }
};

var arr = [0,2,3,4,7,9,10,14];
console.log(arr.findFibonaccy(4))