function test(){
    var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    var o = ["th","st","nd","rd"];
    for (var i = 1; i <= color.length; i++){
      (i<4) ? console.log(i + o[i] + " choice is " + color[i-1]) :
      console.log(i + o[0] + " choice is " + color[i-1]);
    }
}
test();

////////////

function test(){
    var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    var o = ["th","st","nd","rd"];
    for (var i = 1; i <= color.length; i++){
      switch (i) {
        case 1:
          console.log( i + o[1] + " choice is " + color[i-1]);
          break;
        case 2:
          console.log( i + o[2] + " choice is " + color[i-1]);
          break;
        case 3:
          console.log( i + o[3] + " choice is " + color[i-1]);
          break;
        default:
          console.log( i + o[0] + " choice is " + color[i-1]);
      }
    }
  }
  test();