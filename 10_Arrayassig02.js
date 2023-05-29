const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`..........step 1.............`);
let lengthOfArray=arrayNumber.length;
console.log(`length of array: ${lengthOfArray}`);
console.log(`............step2............`);
const first=arrayNumber[0];
console.log(`First Element ${first}`);

let lastElement=arrayNumber[arrayNumber.length-1];
console.log(`Last Element :${lastElement}`);
console.log(`.............step3.............`);
let element=arrayNumber[8];
console.log(`Thirst last element  ${element}`);
console.log(`...........step4...............`);
for(num of arrayNumber){
    if(num%2===0){
        console.log(`Even Number ${num}`);
    }
}

console.log(`...............step5...........`);
for(num of arrayNumber){
    if(num%2===1){
        console.log(`Odd Number ${num}`);
    }
}
console.log(`...............step6..........`);
for(const index in arrayNumber){
    if(index%2==0){
        console.log(`The Even Positioned index is :${arrayNumber[index]}`);
    }
}
console.log(`..................step7.........`);
for(const index in arrayNumber){
    if(index%2==1){
        console.log(`The Odd Positioned index is :${arrayNumber[index]}`);
    }
}
console.log(`..............step8..............`);
let sum=arrayNumber.reduce(function (a,b){
    return a+b;
});
console.log(`Sum of all element: ${sum}`);
console.log(`..............step9.........`);
for(num of arrayNumber){
    if(num%5===0){
        console.log(`The Number Multiple By 5 : ${num}`);
    }
}
console.log(`................step10..........`);
console.log(` The  Number 115 is Avaliable in arrayNumber :${arrayNumber.includes(115)}`);
console.log(`............step11.................`);
console.log(` The  Number 115 is Avaliable in arrayNumber :${arrayNumber.includes(23)}`);
console.log(`..................step12............`);
arrayNumber.splice(3,0,55,60);
console.log(arrayNumber);
console.log(`............step13................`);
const arrayRemove =arrayNumber.splice(4,25);
console.log(arrayNumber);