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

const array=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`Find all the employees working in 'TCS' `);
for (const element of array) {
    if (element.emp_company=="TCS") {
        console.log("Emp Name",element.emp_name,"Emp Company",element.emp_company);
        
    }
}
console.log(`............Finance department Emp......................`);

for (const element of array) {
    if (element.emp_dept=="Finance") {
        console.log("Emp Name",element.emp_name,"Emp department",element.emp_dept);
        
    }
}
for (const employees of array) {
   if (employees.emp_name.starywith("R")) {
       console.log(employees.emp_name);
        
    }
}
console.log(`.........Emp whose salary is grter than 75000......................`);

for (const employees of array) {
    if (employees.emp_salary>75000) {
        console.log(employees);
        
    }
}
console.log(`....Employee whose dept is IT and Salary is grater than or equal to 75000.......`);
for (const employees of array) {
    if (employees.emp_salary>=50000 &&employees.emp_dept=="IT") {
        console.log(employees);
        
    }
}
console.log(`......Emp whose company is Infy........`);
for (const employees of array) {
    if (employees.emp_company=="Infy") {
        console.log(employees);
        
    }
}