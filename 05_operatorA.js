function squareOfWordLength(str){

    var firstvalue="javascript";
    console.log(`Given String is ${firstvalue}`);
    var result=firstvalue.length;
    console.log(`Length of world is ${result}`);
    var res=result*result;
    console.log(`Square of word Length : ${res}`);

    console.log(`................................`);

    var firstvalue1="Google Chrome";
    console.log(`Given String is ${firstvalue1}`);
    var result1=firstvalue1.length;
    console.log(`Length of world is ${result1}`);
    var res1=result1*result1;
    console.log(`Square of word Length : ${res1}`);

    console.log(`..............................`);
    
    var firstvalue2="Developer Smart";
    console.log(`Given String is :${firstvalue2}`);
    var result2=firstvalue2.length;
    console.log(`Length of world is :${result2}`);
    var res2=result2*result2;
    console.log(`Square of word Length : ${res2}`);


}squareOfWordLength("javaScript");

squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`..............................`);

function str(value){

    var str1="I am Angular Developer";
    console.log(`Given String is : ${str1}`);
    var Result=str1.length;
    console.log(`Length of String is : ${Result}`);
    var ResultSplit=str1.split(" ");
    //console.log(`${resultSplit}`);
    console.log(`total number of words:${ResultSplit.length}`);
   var  Value=Result/ResultSplit.length;
   console.log(`Division of String length and total Word is:${Value}`);

   var  Value=Result*ResultSplit.length;
   console.log(`Multiplication of String length and total Word is:${Value}`);


}str(" I am Angular Developer");


