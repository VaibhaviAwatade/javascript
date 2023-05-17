
var  tcsInterview=function (gradScore,hscScore,sscScore,candidateName){
    var result=(gradScore>=70&&hscScore>=80&&sscScore>=90)? `Congrates ${candidateName} you are eligible for TCS interview`:`Ufortunately ${candidateName} you are not eligible for TCS interview`;
    console.log(`${result}`);

}
tcsInterview(80,86,90,"Shri");
tcsInterview(70,65,55,"Nita");
tcsInterview(60,79,88,"Siya");
