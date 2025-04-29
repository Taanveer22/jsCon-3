function info(paramObj) {
  //   console.log(paramObj);
  if (typeof paramObj !== "object" || paramObj === 'null') {
    return "please give a object";
  } else if (
    typeof paramObj.name !== "string" ||
    typeof paramObj.age !== "number"
  ) {
    return "please give correct object property";
  }
  const infoDetails = `my name is ${paramObj.name} . my age is ${paramObj.age}`;
  return infoDetails;
}
const person = {
  name: "tanvir",
  age: 27,
};

const person2 = {
  name: "shakib",
  country: "bd",
};
console.log(info(person));
console.log(info());
console.log(info("tanvir"));
console.log(info(person2));
