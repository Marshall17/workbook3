function vendingMachine(coinSlot, selection) {
    if (coinSlot == "Quater") {
      switch (selection) {
        case "Crunch":
            
            break;
        case "Kit-Kat":
        break;
      
        default:
            break;
      }  
    } 
        
    }
    if(coinSlot == "Quater"){
        console.log("Crunch");
    }else
    {console.log("return coin");}
}
let firstCoin = "Nickle"
let secondCoin = "Quater"
vendingMachine(firstCoin)
vendingMachine(secondCoin, "A1")