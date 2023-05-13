var square =function(one,two){
    var square=one*two;
    return`Square is: ${square}`;
    
}
 var square=square(5,5);
 console.log(square);

 var square =function(one,two){
    var square=one*two;
    return`Square is 6s: ${square}`;
 }

 
 var square=square(6,6);
 console.log(square);

 var square =function(one,two){
    var square=one*two;
    return`Square is 25: ${square}`;
 }
 var square=square(25,25);
 console.log(square);
 
 var square =function(one,two){
    var square=one*two;
    return`Square is 100: ${square}`;
 }
 
 var square=square(100,100);
 console.log(square);

 console.log(".............. step3................");

var areaOfPlot=function (length,width){
 var areaOfPlot=length*width;
 return`area is: ${areaOfPlot}`;
}
   var areaOfPlot=areaOfPlot(499,917);
console.log(areaOfPlot);

console.log("............step4...................");


   var swapValueDude= function (valueOne,valueTwo){
    console.log("Before swap");
    console.log(valueOne,valueTwo);
    }
    swapValueDude("Virat","Anushka");
    swapValueDude("1000","2000");
    

    
   var swapValueDude= function (valueOne,valueTwo){
    console.log("After swap");
    console.log(valueTwo,valueOne);
    }
    swapValueDude("Virat","Anushka");
    swapValueDude("1000","2000");
    
console.log("...........step5..............");

var string="JS  the  most popular language of internet";
console.log(string);


var stringLength=string.length;

console.log(`total char in given string :${stringLength}`);

var charAtSixIndex=string.charAt(6);
console.log(`char at six index: ${charAtSixIndex}`);

var charAtSixIndex=string.charAt(11);
console.log(`char at six index: ${charAtSixIndex}`);

var charAtLastIndex=string.charAt(string.length-1);
console.log(`last char given string: ${charAtLastIndex}`);

var charAtSixIndex=string.charAt(0);
console.log(`first character given string: ${charAtSixIndex}`);

var resultSplit=string.split("");
console.log(`${resultSplit}`);
console.log(`total number of words:${resultSplit.length}`);
