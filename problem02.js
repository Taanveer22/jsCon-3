// using object and function show the ouput


// output 1 : amr nam mehedi . amr basa rajshahi
const person = {
    name : 'mehedi',
    address : 'rajshahi',
}
console.log(person);

function showInfo(myObject){
    console.log(myObject);
    let result = "amr nam " + myObject.name + " . " + "amr basa " + myObject.address;
    return result;
}
console.log(showInfo(person));




// output 2 : mehedihasan@gmail.com
const man = {
    fullName : 'mehedihasan',
    email : 'gmail',
}
// console.log(man);

function showEmail(paramObject){
    console.log(paramObject);
    let email = paramObject.fullName + "@" + paramObject.email + ".com";
    return email;
}
console.log(showEmail(man));