let Professor={
    name:"Pro.patil",
    city:"Sangola",
    collageName:"VMS",
    subject:"Java",
    age:44,
    state:"MH",
  degrees:{
        engineering:'CSC',
        PHD:'Adv Computing',
    },
    certificates:['Hacker Rank Participation',' IFE course',' Adv Programming',],
      Exprence:14,
    }
    console.log(`.................modifing property.................. `);
    Professor.city="mumbai";

    console.log(`........addding elemen in arrray.........`);
    Professor.certificates.push('Oracle Certified');

   console.log(`last elenment in array`);
    console.log(`${Professor.certificates.slice(-1                                                          )}`);



console.table(Professor);
console.log(Professor);