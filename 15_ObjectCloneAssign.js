console.log(`.............step1.........`);
const arrayNums=[20,3,4,56,90,400,49];
const clonedArray=arrayNums;
console.log(clonedArray);
const clonedNewArray=arrayNums.push(55,66);
console.log("cloned Array",arrayNums);
console.log(`...............step2.......`);
const array1=arrayNums.push(10,25);
console.log(arrayNums);
const deepClonedarrayNum=[...arrayNums];
const arrayRemove =arrayNums.splice(7,49);
console.log(arrayNums);

console.log(`.............steo3..........`);
const arrayEven=[2,30,14,8];
const array3=arrayNums.concat(arrayEven);
console.log(array3);
console.log(`..........step4.............`);

const employee_info={
    emp_id:27,
    emo_name:"John Doe",
    salary:{
        july_month:"40,000INR",
        aug_month:"50,000INR",
        jun_month:"65,000INR",
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli 431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India",
    },
    mobiles:["+91 8600 3456 88","1800-4567 32","+91- 9096 5678 77"]

}
console.log(employee_info);
console.log(`.................step5...............`);
 console.log(`Emploee details`);
 console.log(employee_info.address);
 console.log("mobiles",employee_info.mobiles);
 console.log(`.................step6...............`);
 console.log(`updated propertity`);

const clonedObject={...employee_info};
clonedObject.salary.july_month="80,000INR";
console.log("updated Salary",clonedObject.salary.july_month);
console.log("orignal Salary",employee_info.salary.july_month);


const clonedObject1={...employee_info};
clonedObject1.address.country="United Kingdom";
console.log("updated counter",clonedObject1.address.country);
console.log("orignal counter",employee_info.address.country);