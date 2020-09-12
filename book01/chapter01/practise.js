const phoneCost = 199;
const caseCost = 15;
let totalCost = 0;
const TAX_RATE = 0.15;
const spendThreshold = 250;
let bankAccount = 754.30;

function addTax(phoneCost) {
    return phoneCost + phoneCost * TAX_RATE;
}

function formatMoney(price){
    return "$" + price.toFixed(2);
}

function price(...args) {
    let cost = 0;
    args.forEach(arg => {
        cost = cost + addTax(arg);
    });
    return(cost);
}

function checkOut() {
    console.log(`A phone costs ${formatMoney(price(phoneCost))} and a case costs ${formatMoney(price(caseCost))}.`);
    console.log(`You have $${formatMoney(bankAccount)} in your bank.`);
    while (bankAccount > 0) {
        if (price(phoneCost, caseCost) <= spendThreshold && price(phoneCost, caseCost) < bankAccount) {
            bankAccount = bankAccount - price(phoneCost, caseCost);
            console.log("You bought a phone with a case for " + formatMoney(price(phoneCost + caseCost)));
        } else if (price(phoneCost) <= spendThreshold && price(phoneCost) < bankAccount) {
            bankAccount = bankAccount - price(phoneCost);
            console.log("You only bought the phone for " + formatMoney(price(phoneCost)));
        } else {
            console.log("You can't buy any more phones!");
            break;
        }    
        console.log(`You now have ${formatMoney(bankAccount)} left.`);
    }    
}

checkOut();