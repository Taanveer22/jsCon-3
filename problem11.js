// find largest number in a array
function findLargest(paramArray) {
  console.log(paramArray);
  if (Array.isArray(paramArray) !== true) {
    return "please give an array";
  }
  let largestNumber = paramArray[0];
  console.log(largestNumber);
  for (let element of paramArray) {
    console.log(element);
    if(typeof element !== 'number'){
        return 'all elements should be number';
    }
    if (element > largestNumber) {
      largestNumber = element;
    }
  }
  return largestNumber;
}

console.log(findLargest(66));
console.log(findLargest([2, 3, 'tanvir', 55, 8]));
console.log(findLargest([33, 44, 88, 22]));
