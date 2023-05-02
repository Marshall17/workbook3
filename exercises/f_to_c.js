



function convertFtoC(fTemp) {
  let celsius =  (fTemp - 32) * (5 / 9);
  return celsius;
}
let currentTemp = 92 ;
let celiusTemp = convertFtoC(currentTemp)
console.log(celiusTemp);