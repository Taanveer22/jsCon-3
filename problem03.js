// your houseRent = 5000, mealExpense = 3000, personalExpense = 2000 .
//  After ending the month how much will be your saving depend on your income?

function calculateSavings(income){

    if(typeof income !== "number"){
        return  "invalid number input";
    }

    let houseRent = 5000;
    let mealExpense = 3000;
    let personalExpense = 2000;
    let totalCost = houseRent + mealExpense + personalExpense;
    // console.log(totalCost);

    if (totalCost > income){
        return "earn more...."
    }
    
    let savings = income - totalCost;
    // console.log(savings);

    return savings;
}

console.log(calculateSavings(13000));
console.log(calculateSavings('js'));
console.log(calculateSavings(2000));