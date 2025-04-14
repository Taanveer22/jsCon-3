// there are some numbers in an array . which is the biggest number in that array?

/**
 * problem solving step - 1
 *
 * let biggest number = 22;
 * biggest number = 44;
 * biggest number = 44;
 * biggest number = 89;
 * biggest number = 93;
 *
 */



// problem solving step -2


const intNumbers = [22, 44, 38, 89, 93, 33, 46];
let bigNumber = intNumbers[0];

console.log('befole loop biggest:', bigNumber);

for (let element of intNumbers) {
  // console.log(element);
  console.log('current number: ', element, 'biggest number: ', bigNumber);
  if (element > bigNumber) {
    bigNumber = element;
    // console.log(bigNumber);
  }
  console.log('current biggest', bigNumber);
}

console.log('after loop biggest:', bigNumber);



// problem solving step -3
const myBoolean =  false;

const myNumbers = [33, 44, 77, 88, 23, 35];

const myNumbers2 = [44, 4, 7, 84, 34, 99];

function giveBiggestNumber(numbersArray) {

  // if(Array.isArray(numbersArray)){
  //   console.log('this is an array');
  // }
  // else{
  //   console.log('this is not an array');
  // }

  if(!Array.isArray(numbersArray)){
    return 'this is not an arry';
  }
  
  // console.log(numbersArray);
  let biggest = numbersArray[0];
  // console.log(biggest);
  for (let i = 1; i < numbersArray.length; i++) {
    // console.log(i);
    // console.log(numbersArray[i]);
    if (numbersArray[i] > biggest) {
      biggest = numbersArray[i];
    //   console.log(biggest);
    }
    // console.log(biggest);
  }

  return biggest;
}

let result = giveBiggestNumber(myNumbers);
console.log(result);


let result2 = giveBiggestNumber(myNumbers2);
console.log(result2);

let result3 = giveBiggestNumber(myBoolean);
console.log(result3);
