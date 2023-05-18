function voteEligibility(age, ){
    if( age>18&& age<120){
        console.log(` you are eligibil for vote ,Youe age is ${age}`);
    }
    else{
        if(age==0||age>120||age<0 ){
            console.log(`Invilid Data  ,Youe age is ${age}`);
        }
        else{
            if(age==null||age==undefined){
                console.log(`please enter age`);
            }else
        
        {
            console.log(` You are not eligible for vote ,Youe age is ${age} `);
        }
    }
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(20);
voteEligibility(8);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(33);
voteEligibility(null);