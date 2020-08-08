function add(callback){
    callback();
  }
  function callback1(){
    console.log("hello");
  }
  add(callback1);

///////

function add(a,b,opp){
return opp(a,b);
};
function sum(a,b){
return a+b;
};
function mult(a,b){
return a*b;
};
console.log(add(1,3,sum), add(1,3,mult));

////////

let add = (a,b,opp) => opp(a,b);
let sum = (a,b) => a+b;
let mult = (a,b) => a*b;
console.log(add(1,3,sum),add(1,3,mult));

