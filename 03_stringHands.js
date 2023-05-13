var value="Hey you are doing good, keep it up";
console.log(value);

var valueLength=value.length;
console.log("total char in given string",valueLength);

var searchResult=value.search("good");
console.log("search Result is:",searchResult);

var sliceResult=value.slice(0,22);
console.log("slice Result is:",sliceResult);

var result=value.endsWith("up");
console.log(`is ${value} ends with "up":${result}`);

var result=value.startsWith("Hey");
console.log(`is ${value} start with "Hey":, ${result}`);