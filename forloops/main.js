"use strict";
const car = {
    model: "Ferrari",
    driver: "Enzo Ferrari",
    year: 2000,
    status: true,
};
// console.log(car);
for (let key in car) {
    console.log(`${key} : ${car[key]} : ${car.model}  `);
}
// for (let key in car) {
//     if (car.hasOwnProperty(key)) {
//       console.log(`${key} : ${car[key]} :  `);
//     }
//   }
console.log(car);
