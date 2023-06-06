console.log(`Adding 10 into each element`);
let arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
arrayNumbers=arrayNumbers.map(i=>10 +i);
console.log(arrayNumbers);

console.log(`Square of  each element in array`);
arrayNumbers.forEach(function(element,index,array){
    array[index]=element*element;
});
console.log(arrayNumbers);

console.log(`Adding index value on element`);
let arrayNumbers1=[20,11,40,25,23,11,9,31,60,2,19];

arrayNumbers.forEach((element,index)=>{
arrayNumbers1=arrayNumbers1.map(element=>index +element);
console.log(arrayNumbers1);
});