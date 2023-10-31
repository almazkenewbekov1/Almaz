
// let addition = prompt("Enter an addition operation (+)");
// let subtraction = prompt("Enter a subtraction operation (-)");
// let division = prompt("Enter a division operation (/)");
// let multiplication = prompt("Enter a multiplication operation (*)");
// let Result = prompt("Enter a result operation (=)");

let operand1 = parseFloat(prompt("Enter the first operand:"));
let operand2 = parseFloat(prompt("Enter the second operand:"));


let additionResult = operand1 + operand2;
let subtractionResult = operand1 - operand2;
let divisionResult = operand1 / operand2;
let multiplicationResult = operand1 * operand2;

alert(`Addition Result: ${additionResult}`);
alert(`Subtraction Result: ${subtractionResult}`);
alert(`Division Result: ${divisionResult}`);
alert(`Multiplication Result: ${multiplicationResult}`);
