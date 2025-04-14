// there are 234 students are going for a picnic .
// 50 students will go into each bus .
// 15 students will go each microBus . 
// others students will go to the picnic via uberCar 
// and fare will be for each students 200 taka for uberCar .
// now calculate how much money needed .....
// for going to the picnic via uberCar???

function uberCarFare(students){

    if(typeof students !== 'number'){
        return 'invalid number input';
    }

    // console.log(students);
    let busPassenger = 50;
    let microBusPassenger = 15 ;
    let uberCarPerStudent = 200;

    let remainAfterBus = students % busPassenger;
    // console.log(remainAfterBus);
    let remainAfterMicroBus = remainAfterBus % microBusPassenger;
    // console.log(remainAfterMicroBus);
    let uberCarFare = remainAfterMicroBus * uberCarPerStudent;
    return uberCarFare;
}
console.log(uberCarFare(234));
console.log(uberCarFare('234'));

