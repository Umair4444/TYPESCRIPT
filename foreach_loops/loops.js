"use strict";
let nameArray = ["umair", "azhar", "ali", 38];
// // Iterate over each element using forEach
// nameArray.forEach((ele) => {
//     console.log(ele);
// });
// Or you can use a named function
function printElement(element) {
    console.log(element);
}
let name_arr = (elem) => {
    console.log(elem);
};
nameArray.forEach(name_arr);
// printElement(nameArray[0])
// nameArray.forEach(printElement);
// let summmation = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// summmation.forEach((num,ind,arr)=>{console.log("from:", ind, "this time is:" ,num, "and array is", arr );})
// let sum = (num: number) => {
//     console.log(num);
// };
// summmation.forEach(sum)
