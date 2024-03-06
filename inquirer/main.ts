import inquirer from "inquirer";

let userinput = await inquirer.prompt([
  {
    type: "input",
    name: "myname",
    message: "enter your name",
    default: "Pease enter your name",
  },
]);

console.log(`my name is ${userinput.myname} `);
