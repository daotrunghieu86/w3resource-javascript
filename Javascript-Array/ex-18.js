var items = [1, 2, 3, 4, 5, 7, 8, 9];
var height = items.length-1, low=0, mid= Math.floor((height+low)/2);
function test(items, value){
  while(items[mid] !== value){
    if (items[mid] > value){
      height = mid-1;
    }else if (items[mid] < value){
      low = mid+1;
    }
    mid = Math.floor((height+low)/2);
  }
  return mid;
}
test(items,5);
