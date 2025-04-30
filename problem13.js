// foodPandaCost() name ekta function declare korte hobe ...
//  j 3 ta parameters nibe

// 1 ta singara er dam 7 taka
// 1 ta sumocha er dam 10 taka
// 1 ta jilapi er dam 15 taka

// ekhon jodi amra bivinno songkshar singara, sumocha ar jilapi order kori,,
// tahole total cost koto hobe seta return korte hobe

function foodPandaCost(singaraNumbers, sumochaNumbers, jilapiNumbers) {
  console.log(singaraNumbers, sumochaNumbers, jilapiNumbers);

  if (
    typeof singaraNumbers !== "number" ||
    typeof sumochaNumbers !== "number" ||
    typeof jilapiNumbers !== "number"
  ) {
    return "please provide a valid integer number";
  } else if (singaraNumbers <= 0 || sumochaNumbers <= 0 || jilapiNumbers <= 0) {
    return "all parameters should be positive number";
  }

  let everySingaraPrice = 7;
  let everySumochaPrice = 10;
  let everyJilapiPrice = 15;

  const totalSingaraPrice = singaraNumbers * everySingaraPrice;
  const totalSumochaPrice = sumochaNumbers * everySumochaPrice;
  const totalJilapiPrice = jilapiNumbers * everyJilapiPrice;

  const finalCost = totalSingaraPrice + totalSumochaPrice + totalJilapiPrice;
  return finalCost;
}
console.log(foodPandaCost(1, 'duVc', 2));
console.log(foodPandaCost(1, 0, 1));
console.log(foodPandaCost(2, 4, 6));
