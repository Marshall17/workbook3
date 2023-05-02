function getSocSecTax(grossPay) {
    
let aftertax = grossPay*0.062;
console.log(aftertax);
}

function getMedicareTax(grossPay) {
    let aftertax = grossPay *0.01145   
    console.log(aftertax); 
}



function getFederalTax(grossPay,withHoldCode) {    
if (withHoldCode == 0)
{
let afterTax = grossPay *.23;
console.log(afterTax.toFixed())
}
else if (withHoldCode == 1)
{
let afterTax = grossPay *.21;
console.log(afterTax.toFixed())
}
else if (withHoldCode == 2)
{
    let afterTax = grossPay *.195;
    console.log(afterTax.toFixed())
}
 else if (withHoldCode == 3)
 {
    let afterTax = grossPay *.185;
    console.log(afterTax.toFixed())
}
 else (withHoldCode >= 4)
 {
let rate = .18 - (withHoldCode-4)*.005;
let afterTax = grossPay*rate
console.log(afterTax.toFixed())
}
        }
      
        getSocSecTax(45000)
        getMedicareTax(45000)
        getFederalTax(45000,3)
let income = 45000
let code = 3