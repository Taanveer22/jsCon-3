// students are going to picnic
// 100 students are going into a bus
// 1st bus per student cost 5000, 2nd 4000, 3rd 3000
// now calculate the whole students total picnic budget

// 1-100 => 5000
// 101-200 => 4000
// 201++ => 3000


function picnicBudget(students) {
  console.log(students);
  if (students <= 100) {
    let firstHunderdPerCost = 5000;
    const firstHundredTotalCost = students * firstHunderdPerCost;
    return firstHundredTotalCost;
  } else if (students <= 200) {
    let firstHunderdPerCost = 5000;
    const firstHundredTotalCost = firstHunderdPerCost * 100;
    let secondHundredPerCost = 4000;
    let reaminingStudents = students - 100;
    let reaminingStudentsCost = reaminingStudents * secondHundredPerCost;
    const secondHundredTotalCost =
      firstHundredTotalCost + reaminingStudentsCost;
    return secondHundredTotalCost;
  } else {
    let firstHunderdPerCost = 5000;
    const firstHundredTotalCost = 100 * firstHunderdPerCost;
    let secondHundredPerCost = 4000;
    const secondHundredTotalCost = 100 * secondHundredPerCost;
    let reaminingStudents = students - 200;
    let reaminingStudentsCost = 3000 * reaminingStudents;
    const allStudentsCost =
      firstHundredTotalCost + secondHundredTotalCost + reaminingStudentsCost;
    return allStudentsCost;
  }
}

console.log(picnicBudget(100));
console.log(picnicBudget(101));
console.log(picnicBudget(202));
