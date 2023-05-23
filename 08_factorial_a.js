function factorialOfNum(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
    else if(n==null||isNaN(factorialOfNumsss)){
        console.log(`please enter valid number except null,undefined,NaN`);

    }


  }
  var n = 3;
  answer = factorialOfNum(n)
  console.log("Factorial of " + n + " : " + answer);
  var n = 5;
  answer = factorialOfNum(n)
  console.log("Factorial of " + n + " : " + answer);
  var n = null;
  answer = factorialOfNum(n)
  console.log("Factorial of " + n + " : " + answer);
  var n = 8;
  answer = factorialOfNum(n)
  console.log("Factorial of " + n + " : " + answer);
  var n = undefined;
  answer = factorialOfNum(n)
  console.log("Factorial of " + n + " : " + answer);
  var n = 0;
  answer = factorialOfNum(n)
  console.log("Factorial of " + n + " : " + answer);
  var n = 9;
  answer = factorialOfNum(n)
  console.log("Factorial of " + n + " : " + answer);