// how many numbers of boolean value includes in an array. calculate the number.

// method 01
const mixedArray = [
  "js",
  false,
  1995,
  true,
  "brendanEich",
  true,
  false,
  "es6",
  2015,
];
// console.log(mixedArray);

function booleanCounter(myArray) {
  //   console.log(myArray);
  const booleanArray = [];
  for (let element of myArray) {
    // console.log(element);
    if (typeof element === "boolean") {
      console.log(element);
      booleanArray.push(element);
    }
  }
  //   return booleanArray;
  return booleanArray.length;
}
console.log(booleanCounter(mixedArray));


// how many numbers of string value includes an array. calculate the strings number.

const variedArray = ['node', 2009, true, 'rayan dal', false, 'joyent'];
// console.log(variedArray);
function stringCounter(myArray2){
    // console.log(myArray2);
    let count = 0;
    for(let i = 0 ; i <myArray2.length;i++){
        // console.log(i);
        // console.log(myArray2[i]);
        if(typeof myArray2[i] === 'string'){
            console.log(myArray2[i]);
            count++;
        }
    }
    return count;
}
console.log(stringCounter(variedArray));