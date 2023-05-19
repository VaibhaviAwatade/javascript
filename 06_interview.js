function TCSinterview (gradeScore,hscScore,sscScore,candidateName){
    if (gradeScore>=70||hscScore>=80||sscScore>=90) {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
        
    } else {
        console.log(` Unfortunately ${candidateName} you are not eligible for interview `);
        
    }
}   TCSinterview(80,86,90,"Savita");
    TCSinterview(70,65,55,"Nita");
    TCSinterview(60,79,88,"shri")
