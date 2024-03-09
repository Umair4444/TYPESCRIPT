// function countdown(number: number): void {
//   if (number <= 0) {
//     console.log("Done");
//     return;
//   }
//   console.log(number);
// it works on pre-decreament only
//   countdown(--number); //nnumber -1
// }

// countdown(10);

function countdown(number: number): void {
  if (number >= 10) {
    console.log("Done");
    return;
  }
  console.log(number);
  // it works on pre-increament only
  countdown(++number); //nnumber -1
}

countdown(1);
