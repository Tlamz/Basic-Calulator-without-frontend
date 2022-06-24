document.write("<h1>Basic Calculator</h1>");

const num1 = parseFloat(prompt("Enter first number: "));
const operator = prompt("Enter operator +, -, * or / : ");
const num2 = parseFloat(prompt("Enter second number: "));

let result;
if (isNaN(num1) || isNaN(num2)) {
  alert("Error! Kindly restart");
} else if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/"){
  result = num1 / num2;
} else {
  alert('Error! Kindly check the operator used');
}

let message = num1 + " " + operator + " " + num2 + " = " + result;

alert(message);
