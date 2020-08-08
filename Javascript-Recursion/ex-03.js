function range(x,y){
  // var list = [];
  if (y-x === 2){
    return [x + 1];
    // return list = x + 1;
  }else{
    var list = range(x, y-1);
    list.push(y-1);
    return list;
  }
}
range(2,9)

////////

function range(x,y){
	var list = [];
	if (x+2 === y){
		return [x+1];
	}else{
		list = range(x+1,y);
		list.push(x+1);
		return list;
	}
}
range(2,9)

////////

// var list = [];
var range = function(x,y,list){
	if (!list){
	  list = [];
	}
	x++;
	if(x<y){
		list.push(x);
		range(x,y,list);
	}
	return list;
}
range(2,9)