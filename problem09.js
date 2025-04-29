// validate the number parameters in a function
function multiply(x, y){
    console.log(x,y);
    if(typeof x !== 'number' && typeof y !== 'number'){
        return 'please give a number';
    }
    const result = x * y;
    return result;
}
console.log(multiply(4, 5));
console.log(multiply(2,3));