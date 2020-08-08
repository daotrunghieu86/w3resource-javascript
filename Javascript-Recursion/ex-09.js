Array.prototype.merge_Sort = function () {
    if (this.length <= 1) {
        return this;
    }
    var half = Math.floor(this.length / 2);
    var left = this.slice(0, half).merge_Sort();
    var right = this.slice(half, this.length).merge_Sort();
    var merge = function (left, right) {
        var arr = [];
        while (left.length > 0 && right.length > 0) {
            arr.push(left[0] <= right[0] ? left.shift() : right.shift());
        }
        return arr.concat(left).concat(right);
    }
    return merge(left, right);
}
var a = [34, 7, 23, 32, 5, 62];
console.log(a.merge_Sort());

////////////


function sorts(arr, sort = []) {
    var minValue = Math.min.apply(null, arr);
    var minValueInd = arr.findIndex(id => id === minValue);
    sort.push(minValue);
    arr.splice(minValueInd, 1);
    return arr.length ? sorts(arr, sort) : sort;
}
const arr = [22, 1, 4, 31, 9, 15, 62, 40, 111, 5, 10];
console.log(sorts(arr));