"use strict";
const car = {
    model: "Ferrari",
    driver: "Enzo Ferrari",
    year: 2000,
    status: true,
};
// console.log(car);
console.log("For in key Example");
for (let key in car) {
    console.log(`${key} : ${car[key]} : ${car.model}  `);
}
// for (let key in car) {
//     if (car.hasOwnProperty(key)) {
//       console.log(`${key} : ${car[key]} :  `);
//     }
//   }
console.log("For in Example");
console.log(car);
for (let allcars in car) {
    console.log(allcars);
}
console.log("For of Example");
console.log(car);
for (let allcars in car) {
    console.log(allcars);
}
