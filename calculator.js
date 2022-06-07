const number1 = Number(prompt("Enter first number: "));
const number2 = Number(prompt("Enter second number: "));

const operator = prompt("Enter operator (+, -, *, /, %) ");

if(operator == "+") {
    console.log (number1 + number2)
} else if (operator == "-") {
    console.log (number1 - number2)
} else if (operator == "*") {
    console.log (number1 * number2)
} else if (operator == "/") {
    console.log (number1 / number2)
} else if (operator == "%") {
    console.log (number1 % number2)
} else {
    console.log ("Invalid input! ")
}