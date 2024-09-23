import inquirer from "inquirer";

// choose multiple options
// let sheet = await inquirer.prompt(
//     {
//         name : "attend",
//         type : "checkbox",
//         choices : ["Sunday","Monday","Tuesday"],
//         message : "Your Choice"
//     }
// )

// console.log(sheet)

// choose one option with serial no
// let rawlist = await inquirer.prompt({
//   name: "list",
//   type: "rawlist",
//   choices: ["mon", "tues", "weds"],
//   message: "your choice",
// });

// console.log(rawlist);

// make temp txt file and tranfer data from there to command line
// let editor = await inquirer.prompt({
//   name: "list",
//   type: "editor",
//   message: "your choice",
// });

// console.log(editor);

// expands
// let expand = await inquirer.prompt({
//   type: "expand",
//   message: "Select a color:",
//   name: "color",
//   choices: [
//     {
//       key: "r",
//       name: "Red",
//       value: "red",
//     },
//     {
//       key: "g",
//       name: "Green",
//       value: "green",
//     },
//     {
//       key: "b", // letter that user enters or selects
//       name: "Blue", // value that is shown to user
//       value: "red", // value that prints
//     },
//   ],
// });

console.log(expand);
