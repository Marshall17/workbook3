function displayMailingLabel(name,address,city,state,zip,) {
    console.log(name);
    console.log(address);
    console.log(city,state,zip);
   
}
let name = "Bill"
let adress = "1234 bill drive"
let city = "LitterBill"
let state = "NC"
let zip = "49283"

displayMailingLabel(name,adress,city,state,zip,);
let name2 = "Jill"
let adress2 = "1234 jill drive"
let city2 = "LitterJill"
let state2 = "NY"
let zip2 = "17322"
displayMailingLabel(name2,adress2,city2,state2,zip2);


function addNumber(num1,num2) {
    let answer = num1 + num2; 
    let output = 
    `${num1} + ${num2} = ${answer}`

    console.log(output);

}
addNumber(4,7)
addNumber(8,2)

function displayReceipt(totalDue,amountPaid) {
    let answer = totalDue - amountPaid 
    let output = 
` ${totalDue} - ${amountPaid} = ${Math.abs(answer)}`
console.log(output);
}
displayReceipt(4,7)