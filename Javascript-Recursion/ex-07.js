function test(x){
    if (x < 0){
        x = Math.abs(x);
    }else if (x === 0){
        return true;
    }else if (x === 1){
        return false;
    }else{
        x = x-2;
        return test(x);
    }
}
test(22);