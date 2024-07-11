// . Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

const calculate = (n1, n2, sign) => {
  switch (sign) {
    case "+":
    console.log(n1 + n2); 
      break;
    case "*":
        console.log(n1 * n2); 
      break;
    case "/":
        console.log(n1 / n2); 
      break;
    case "%":
        console.log(n1 % n2); 
      break;
    case "-":
        console.log(n1 - n2); 
      break;
      default:
        console.log("invalid Input");
  }
};

calculate(5,4,'%')