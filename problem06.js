// if a person has at least 1500 marks out of 2000
// and if he is a scholarship holder he will get extra 20% marks
// he will get the job . and others will fail.
const person1 = {
    name : 'mokbul',
    hscMarks : 700,
    honoursMarks : 700,
    hasScholarship : true,
}

const person2 = {
    name : 'abul',
    hscMarks : 700,
    honoursMarks : 700,
    hasScholarship : false,
}

function jobSelection(myObject){
    // console.log(myObject);

    if(typeof myObject !== 'object'){
        return "input is invalid object";
    }

    let totalMarks =myObject.hscMarks + myObject.honoursMarks;
    if(myObject.hasScholarship === true){
        totalMarks = totalMarks + (totalMarks * 0.2);
    }

    if(totalMarks >= 1500){
        return "you have got the job";
    }
    else{
        return "you are rejected";
    }

}
console.log(jobSelection(person1));
console.log(jobSelection(person2));