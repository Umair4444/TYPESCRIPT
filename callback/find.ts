// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];
// function findCherries(fruit: { name: string }) {
//   return fruit.name === "cherries";
// }
// console.log(inventory.find(findCherries));

//    inventory.find(findCherries); // { name: 'cherries', quantity: 5 }
/* OR */
//    inventory.find(e => e.name === 'apples'); // { name: 'apples', quantity: 2 }

// let animals = [
//   { name: "cat", food: "meat" },
//   { name: "dog", food: "cake" },
// ];

// // for (let ani of animals) {
// //   console.log(ani);
// // }

// console.log(animals.find(e=>e.food === "cake"))


class Person {
 private _name: string;
 public constructor(name: string) {
 this._name = name;
 }
 private greet() {
 return this._name;
 }

}

let g = new Person("un")

console.log(g.)


