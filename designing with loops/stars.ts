// function printStars(lines: number): void {
//     for (let i = 1; i <= lines; i++) {
//         console.log('*'.repeat(i));
//     }
// }

// // Call the function with the number of lines you want to print
// printStars(5);

// function printStars(lines: number): void {
//     for (let i = 1; i <= lines; i++) {
//         let stars = '';
//         for (let j = 0; j < i; j++) {
//             stars += '*';
//         }
//         console.log(stars);
//     }
// }

// // Call the function with the number of lines you want to print
// printStars(5);

// // stars pattern
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 0; j < i; j++) {
    stars += "X";
  }
  console.log(stars);
}

// reverse star pattern
for (let i = 5; i >= 0; i--) {
  let stars = "";
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  console.log(stars);


}
