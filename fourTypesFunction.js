// there are 4 types of function

// type 01 : no parameters and no return
function showConsole(){
    console.log('hello js');
}
showConsole();


// type 02 : parameters with no return
function subtraction(x, y){
    console.log(x - y);
}
subtraction(7, 3);


// type 03 : no parameters but return
function giveOil(){
    let oilBrand = 'fresh';
    return oilBrand;
}
console.log(giveOil());


// type 04 : both parameters and return
function doTriple(z){
    return z * 3;
}
console.log(doTriple(3));
let result = doTriple(5);
console.log(result);