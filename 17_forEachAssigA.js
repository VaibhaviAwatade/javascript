console.log(` Array with Index `);
const arrayNumber=[1,-7,40,502,-77,91,0,108,89,-601];

arrayNumber.forEach((element ,index)=>{
    console.log(element,index);
});

console.log(`Positive number in given array`);

arrayNumber.forEach((element ,index)=>{
    if (element>0) {
        console.log(element);
    }
});
console.log(`...Negative Number in new array....`);
const arrayNegativeNumer=[];
arrayNumber.forEach((element)=>{
    if (element<0) {
        arrayNegativeNumer.push(element);
    }
});
arrayNegativeNumer.forEach(element=> console.log(element));

console.log(`.......Even Number....`);

arrayNumber.forEach((element ,index)=>{
    if (element%2==0) {
        console.log(element);
    }
});
console.log(`Sum of all element..`);
let result=0;
arrayNumber.forEach(element =>{
 {   result +=element;
        console.log(result);
    }
});
console.log(`...Even index Element..`);

arrayNumber.forEach((element ,index)=>{
    if (index%2==0) {
        console.log(element);
    }
});
