class Employee{
    constructor(emp_id ,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil= new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny= new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy");

const array_emp=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
 console.log(`Employee from Wipro`);
 const arrayWiproEmployee=array_emp.filter((employee)=>{
    return employee.emp_company=="Wipro";
 });
 const arrayWiproEmployeeName=arrayWiproEmployee.map((employee)=>{
    return employee.emp_name;
 });
    for (const employee of arrayWiproEmployee) {
        console.log(employee);
    }









console.log(`........Employees from IT pr HR Dept.........`);
const  arrayItHrEmployees=array_emp.filter((employee)=>{
    return employee.emp_dept=="IT"||employee.emp_dept=="HR";
});
  const arrayItHrEmployeesNames1=arrayItHrEmployees.map((employee)=>{
    return employee.emp_name;
 });
for (const employee of arrayItHrEmployees) {
    console.log(employee);
};




console.log(`Employee whose id  is grater than 50`);
const  arrayIdEmployees=array_emp.filter((employee)=>{
    return employee.emp_id>50;
});
  const arrayIdEmployeesNames=arrayIdEmployees.map((employee)=>{
    return employee.emp_name;
 });
for (const employee of arrayIdEmployees) {
    console.log(employee);
}





console.log(`Employee whose letter Start with A,V,M...`);
const arrayEmployeesStart=array_emp.filter((employees)=>{
    return employees.emp_name.startwith("A")|| employees.emp_name.startwith("V")||employees.emp_name.startwith("M");

});
const arrauIds= arrayEmployeesStart.map((employee)=>{
    return employee.emp_name;
});
 for (const employee of arrayEmployeesStart) {
    console.log(employee.emp_name);
 }

 console.log(``);







// const  arrayNameEmployees=array_emp.filter((employee)=>{
//     return employee.emp_name.startwith("A")||employee.emp_name.startwith("V")||employee.emp_name.startwith("M");
// });
//   const arrayNameEmployeesNames=arrayNameEmployees.map((employee)=>{
//     return employee.emp_name;
//  });
// for (const employee of arrayNameEmployees) {
    
//     console.log(employee.emp_name);





// }
// const arrayemployeeid1 = array_emp.filter( (employee)=> {
//     return employee.emp_name.startsWith("A")||employee.emp_name.startsWith("V")||employee.emp_name.startsWith("M");;
// });
// const arrayIds1 =arrayemployeeid1.map( (employee)=> {
//     return employee.emp_name;
// });
// for (const employee of arrayemployeeid1){
//     console.log(employee.emp_name);
// }