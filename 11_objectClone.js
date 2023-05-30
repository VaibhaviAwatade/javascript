
console.log(`........creating object bankSbi........`);
let bankSbi={
    bankName:"SBI",
    location:"Satara",
    accountNo:234567834554,
    ifSc:"SBI000890321",
    interestRate:4.7,
}
console.table(bankSbi);

console.log(`................creating object bankLocation........`);
let bankLocation={
    street:"ABCD",
    city:"pune",
    pin:413307,
}
console.table(bankLocation);

console.log(`............clone the object bankSbi,bankLocation.............`);
Object.assign(bankSbi,bankLocation);
console.log("cloned the object",bankSbi);
console.log("cloned the object",bankLocation);
console.log(`...............creating object rateOfInterest..........`);
let rateOfInterest={
    homeLoanInterest:3.9,
    personalLoanInterest:5.7,
    dueInterest:7.2,
}
console.table(rateOfInterest);

let sbiDetails={

}
console.log(sbiDetails);
console.log(`...........Merge the object bankSbi,bankLocation,rateOfInterest with object sbiDetails..........`);

const mergeObject=Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.table(mergeObject);

console.log(`......................Traverse  Merged Object.............`);
for (const key in mergeObject) {
    if (Object.hasOwnProperty.call(mergeObject, key)) {
        const value = mergeObject[key];
        console.log(`${key},${value}`);
    }
}