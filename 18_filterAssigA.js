const arrayNumber=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`Element Grater than 50`);
const arrayGraterThan50=arrayNumber.filter((element)=>{
    return element>50;
});
console.log(arrayGraterThan50);

console.log(`Find all Even Number`);
const arratEvenNumber=arrayNumber.filter((element)=>{
    return element%2==0;
});
 console.log(arratEvenNumber);

 console.log(`Find all odd number`);
 const arrayOddNumber=arrayNumber.filter((element)=>{
    return element%2==1;
 });
  console.log(arrayOddNumber);


  console.log(`Element Divisible by 5`);
  const arrayDiv5=arrayNumber.filter((element)=>{
    return element %5==0;
  });
  console.log(arrayDiv5);

  console.log(` Number are between 20 and 50`);
  const arrayBetwwen =arrayNumber.filter((element)=>{
    return 20<element && 50>element;
  });
  console.log(arrayBetwwen);