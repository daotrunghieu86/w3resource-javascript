function leap_year_arange(begin,end){
    var year_arange = [];
    for (var i = begin; i <= end; i++){
        year_arange.push(i);
    }
    var arr_result = [];
    year_arange.forEach(function(year){
        if (is_leap_range(year)){
            arr_result.push(year);
        }
    });
    function is_leap_range(year){
        if (year%4 === 0 && year%100 !== 0 || year%100 === 0 && year%400 == 0){
            return true;
        }else {
            return false;
        }
    }
    return arr_result;
}
leap_year_arange(2000,2012);

////////

function test(x,y){
    var arr = [];
    for (var i = x; i <= y; i++){
      if (i%4 === 0 && i%100 !== 0 || i%100 === 0 && i%400 == 0){
        arr.push(i);
      }
    }
    return arr;
  }
  test(2000,2012)