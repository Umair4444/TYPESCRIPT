"use strict";
// REST PARAMETER
let my_numbers = [1, 3, 5, 6, 78, 8];
function sum(fir, sec, ...my_numbers) {
    console.log(fir);
    console.log(sec);
    console.log(...my_numbers);
    //   console.log(fir + sec + ...my_numbers); CANNOT DIRECTLY ADD NUMBER AND ARRAY OF NUMBER  
}
sum(1, 2, ...my_numbers);
