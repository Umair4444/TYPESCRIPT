interface Cars {
  [key: string]: string | number | boolean;
  //   model: string;
  //   driver: string;
  //   year: number;
  //   status: boolean;
}

const car: Cars = {
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
