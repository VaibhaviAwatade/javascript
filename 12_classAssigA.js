
console.log(`..........class Vehicle.........`);
class  Vehicle{
    constructor (name,color,company,milage,fuelType){
        
        this.name=name;
        this.color=color;
        this.company=company;
        this.milage=milage;
        this.fuelType=fuelType;
    }

showDetails(){
    console.log(`Details of Vehicle  ${this.name},${this.color},${this.company},${this.milage},${this.fuelType}`);
}
}
const heroSplender=new Vehicle("heroSplender","Red","Tata",57,"perol");
const royalEnfield=new Vehicle("royalEnfield","Black","Bajaj",37,"perol");
const KTM=new Vehicle("KTM","Red","Bajaj",40.05,"perol");
const BMW=new Vehicle("BMW","white","BMW AG ",33,"desial");
const tataNexon=new Vehicle("tataNexon","blue","Tata",17.05,"desial");

const arrayOfVehicles=[heroSplender,royalEnfield,KTM,BMW,tataNexon];
console.log(arrayOfVehicles[0]);
console.log(arrayOfVehicles[1]);
console.log(arrayOfVehicles[2]);
console.log(arrayOfVehicles[3]);

console.log(arrayOfVehicles[4]);
 


heroSplender.showDetails();
royalEnfield.showDetails();
KTM.showDetails();
BMW.showDetails();
tataNexon.showDetails();

console.log(`..........class collage..........`);
class  College{
    constructor (name,Department,University,City,state,){
        
        this.name=name;
        this.Department=Department;
         this.University=University
        this.City=City;
        this.state=state;
    }

CollegeInfo(){
    console.log(`collage Info ${this.name},${this.Department},${this.University},${this.City},${this.state}`);


}
}
const VMS=new College("VMS",4,"Solapur","Sangola","MH");
const YC=new College("YC",7,"KBP","Satara","MH");
const DC=new College("DC",5,"University of Delhi","New Delhi","Delhi");
const Shivaji=new College("Shivaji",8,"Bangolore","Bangolore","Karnataka");

VMS.CollegeInfo();
YC.CollegeInfo();
DC.CollegeInfo();
Shivaji.CollegeInfo();

function  traverse(collageObject){
for (const key in  collageObject) {
    if (Object.hasOwnProperty.call(collageObject, key)) {
        const element = collageObject[key];
        console.log(`${key}, ${element}`);
        
    }
}
        
    
}
