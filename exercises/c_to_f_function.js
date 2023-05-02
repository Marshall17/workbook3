function convertCtoF(cTemp) {
    let fahrenheitTempature = (cTemp *(9/5) + 32);
    return fahrenheitTempature
}
let currentTemp = 78 ; 
let fahrenheitTemp = convertCtoF(currentTemp)
console.log(fahrenheitTemp);