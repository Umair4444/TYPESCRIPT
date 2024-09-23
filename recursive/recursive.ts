// function countdown(number: number): void {

//   if (number <= 0) {
//     console.log("Done");
//     return;
//   }
//   console.log(number);
// // it works on pre-decreament only
//   countdown(--number); //nnumber -1
// }

// countdown(10);

// function countdown(number: number): void {
//   console.log("start loop from ",number);
//   if (number >= 10) {
//     console.log("Done");
//   }
//   console.log(number);
//   // it works on pre-increament only
//   countdown(--number); //nnumber -1
// }

// countdown(15);

function recur(repeat: number) {
  console.log("start loops from", repeat);
  if (repeat > 0) {
    recur(--repeat);
  } else {
    console.log("loop ends");
  }
  console.log("function ended" , repeat);
}

recur(6)

