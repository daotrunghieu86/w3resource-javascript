var time = function(){
  setInterval(function(){
    var d = new Date();
    var dat = d.getHours() +":"+d.getMinutes()+":"+d.getSeconds();
    console.log(dat);
  }, 1000);
}
console.log(time());