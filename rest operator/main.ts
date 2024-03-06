// // let restnumber: number[] = [1, 2, 4, 6];

// function summation(a:number = 3, ...b:number[]) {

//   console.log(a);
//   console.log(b);
// }

// summation( 2 ,1,6,7,9,0);

// let a = [1,22,4,5,6,7]

// let b = [45,45,66,75,75,7]

// let c = [...a,...b]

// console.log(a  ,   b   ,    c);

// const [first, second, ...rest] = [1, 2, 3, 4, 5];
// console.log(rest); // Output: [3, 4, 5]

// const array1 = [1, 2, 3];
// const array2 = [...array1, 4, 5];
// console.log(array2); // Output: [1, 2, 3, 4, 5]

// function multiply(...numbers: number[]): number {
//     return numbers.reduce((acc, val) => acc * val, 1);
// }

// const result = multiply(2, 3, 4);
// console.log(result); // Output: 24

// function multiply(x: number, y: number, z: number): number {
//     return x * y * z;
// }

// const numbers: [number, number, number] = [2, 3, 4];
// const result = multiply(...numbers);
// console.log(result); // Output: 24

// let num : number[] = [1, 3, 5, 7, 9];

// function summation(...num:number[]) {
//   console.log(num);
// }
// summation(...num);

function customSum(numbers: number[]): number {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

// Example usage:
const numbersArray: number[] = [1, 2, 3, 4, 5];
const result: number = customSum(numbersArray);
console.log(`Sum of ${numbersArray} is: ${result}`);
