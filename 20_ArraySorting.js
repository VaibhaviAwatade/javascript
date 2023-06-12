const array=[10,5,'a','b','h',11];
const numbers = array.filter(item=> typeof item==='number');
numbers.sort((a,b)=>a-b);
console.log("Numbers:",numbers.join());
const alphabets = array.filter(item=>typeof item == 'string');
alphabets.sort();
console.log("Alphabets:",alphabets.join())