function timeConvert(x){
  var hour = Math.floor(x/60);
  var minute = x - hour*60;
  return hour + " hour " + minute + " minute ";
}
timeConvert(200);