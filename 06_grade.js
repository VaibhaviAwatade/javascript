function gradeCalculation(marks){
    
    if (marks==undefined || isNaN(marks) || marks<0 || marks>100) { // undefined, null
        console.log(`Invalid marks: ${marks}`);
    } else {
      
       if (marks>=90) {
            console.log(`Fantastic marks : ${marks}, Your grade is A+`);
       } else { 
        if(marks>=75){
            console.log(`Excellent mark ${marks},your grad is A`);
        }
        else{
            if(marks>=50){
                console.log(`Good mark ${marks},your grad is B`);
   
            }
            else{
                if(marks>=35){
                    console.log(`Excellent mark ${marks},your grad is C`);

                }
                else{
                    console.log(`Sorry your fill your marks ${marks}`);
                }
            }


        }
        
       }
    }

    
}

gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);

gradeCalculation(-7);
gradeCalculation(98);
gradeCalculation(80);

gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);