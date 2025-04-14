console.log('brendon eich');

let x = 5;
console.log(x);
let y = 'js';
console.log(y);

console.log('brendon eich');

let z = true;
console.log(z);

console.log('brendon eich');

// we can solve this repetative issue in by creating function
function jsCreator(){
    console.log('brendon eich');
}
jsCreator();

let a = 5;
console.log(a);
let b = false;
console.log(false);

jsCreator();

let c = undefined;
console.log(c);
console.log(typeof c);
let d = null;
console.log(d);
console.log(typeof d);

jsCreator();


// we can pass multiple parameters through function and access it when invoked/called
function programmingLanguage(language,inventedYear,inventor){
        console.log(language, inventedYear, inventor);
}
programmingLanguage('js', 1995, 'brendan eich');
programmingLanguage('py', 1991, 'guido van russom');

// function with return statement
function add(x,y){
    let total = x + y;
    return total;
}
console.log(add(5, 3));
console.log(add(2, 3));


function giveRice(){
    let riceName = 'chinigura';
    return riceName;
}
let funcOutputVar = giveRice();
console.log(funcOutputVar);
