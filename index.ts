#! /usr/bin/env node  
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "Select One of the operator you perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if ( answer.operator === "Addition"){
  console.log(answer.firstNumber + answer.secondNumber)
}
else if( answer.operator === "Subtraction"){
  console.log(answer.firstNumber - answer.secondNumber)
} 
else if( answer.operator === "Multiplication"){
  console.log(answer.firstNumber * answer.secondNumber)
} 
else if( answer.operator === "Division"){
  console.log(answer.firstNumber / answer.secondNumber)
} else(
  console.log("please Select valid operator")
)

console.log("end")

// Question -7 subtract -11
// answer -7 - -11
// answer -7 +11
// answer 4  

