var arr_sum = function(arr){
  if(arr.length===1){
    return arr[0];
  }else{
    return arr.shift() + arr_sum(arr);
   	// sử dụng shift() remove phần tử đầu tiên của mảng
   	// hoặc sử dụng pop() remove phần tử cuối của mảng 
  }
}
console.log(arr_sum([1,2,3,2,4]))

///////

const sum = (i, arr, zero = 0) => {
	return i === arr.length ? zero : sum(i+1, arr, zero += arr[i]);
}
var arr = [2,3,4,1];
console.log(0,arr);

////////


