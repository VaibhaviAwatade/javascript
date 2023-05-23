const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`step-1.`);
let firstElement = arrayFruits[0];
console.log(`firstElement: ${firstElement}`);
let lastElement = arrayFruits[4];
console.log(`lastElement: ${lastElement}`);
console.log(`-------------------------------------------------------`);
console.log(`step-2.`);
let AddElementAtFirst = arrayFruits.unshift("Papaya");
console.log(` adding element papaya at the first: ${arrayFruits}`);
console.log(`-------------------------------------------------------`);
console.log(`step-3.`);
let removeMango = arrayFruits.splice(4,1);
console.log(`after removing the element mango: ${arrayFruits}`);
console.log(`-------------------------------------------------------`);
console.log(`step-4.`);
let addingElementPineapple = arrayFruits.push("Pineaaple");
console.log(`adding element pineapple at the end of arrray: ${arrayFruits}`);
console.log(`-------------------------------------------------------`);
console.log(`step-5.`);
let insertElement = arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`aading dragon fruit before watermelon: ${arrayFruits}`);
console.log(`-------------------------------------------------------`);
console.log(`step-6.`);
let replceElement = arrayFruits.splice(2,1,"KiWi");
console.log(`repalcing orange with kiwi: ${arrayFruits}`);
console.log(`........................................`);


console.log(`step-8.`)
let lastThreeElement = arrayFruits.slice(-3);
console.log(`last three elements: ${lastThreeElement}`);
console.log(`............................................`);
console.log(`step-7.`);
let elementsFrom1To4 = arrayFruits.slice(1,5);
console.log(`elements from 1 to 4: ${elementsFrom1To4}`);