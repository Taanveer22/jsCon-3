// function e input hisebe nibe ana ,,, ar output hisebe vori ber korte hobe,,
function anaToVori(ana) {
  console.log(ana);

  if (typeof ana !== "number" || ana < 0) {
    return "please provide a valid interger number";
  }
  let vori = ana * 0.0625;
  return vori;
}
console.log(anaToVori(10));
console.log(anaToVori(-2));
console.log(anaToVori(0));

