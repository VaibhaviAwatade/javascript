var greateNumber=function(num1,num2){
    var Result=num1>num2 ?`${num1} is greter `:`${num2} is greter`;
    console.log(Result);
}
greateNumber(10,-10);
greateNumber(800,899);



var isEvenOrOddNum=function (num){
    var result=num%2==0 ?true :false;
    return result;

}
 var result=isEvenOrOddNum(29);


 
var res=(result==true)?"29 is Even Number":"29 is Odd Number";
console.log(`${res}`);

var result=isEvenOrOddNum(44);
var res=(result==true)?"44 is Even Number":"44 is Odd Number";
console.log(`${res}`);

var result=isEvenOrOddNum(0);
var res=(result==true)?"0 is Even Number":"0 is Odd Number";
console.log(`${res}`);

var result=isEvenOrOddNum(101);
var res=(result==true)?"101 is Even Number":"101 is Odd Number";
console.log(`${res}`);


var wordLength=function (word){
    var len=word.length;
    var result=len%2==0 ?"Even":"Odd";
    return result;
}
var returnValue=wordLength("javaScript");
console.log(`javaScript word length is ${returnValue}`);

var returnValue=wordLength("developer");
console.log(`developer word length is ${returnValue}`);

var returnValue=wordLength("Google");
console.log(`Google word length is ${returnValue}`);

