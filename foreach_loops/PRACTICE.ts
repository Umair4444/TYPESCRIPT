// // // // console.log string and number data types
// // let myname: string = "Umair";
// // let mylocation: string = "karachi";

// // const AGE: number = 30;

// // console.log("my name is",myname,"and I live in",mylocation, "and my age is",AGE);

// // name = "azhar"

// // console.log("my name is",myname.toUpperCase(),"and I live in",mylocation.toLocaleUpperCase(), "and my age is",AGE);

// // let namearray : (string|number)[] = []
// // namearray.push("umair")

// // // push name in array
// // console.log(namearray);
// // namearray.push("azhar")
// // namearray.push("ali")
// // namearray.push(38)

// // console.log(namearray);

// ////reverse the array
// // console.log(namearray);
// // namearray.reverse()
// // console.log(namearray);
// // console.log(namearray);
// // namearray.reverse()
// // console.log(namearray);
// // console.log(namearray);

// // let fav_cars : string [] = []

// // fav_cars.unshift("Ferrari","Volkswagen","Mercedes","BMW")
// // console.log(fav_cars);

// // fav_cars.push("Nissan","Suzuki","Toyota")
// // console.log(fav_cars);

// // let my_current_cars : {} = {
// //      fastest_car : fav_cars.slice(0,3)

// // }

// // console.log(my_current_cars);

// // let fruits = ["mango","apple","banana","melon"]
// // let new_fruits = fruits.slice(0,2)
// // console.log(fruits);
// // console.log(new_fruits);

// interface person_details {
//   id_no: number;
//   name: string;
//   age: number;
//   citizenship: string;
//   Currently_working: boolean;
//   status?: string;
// }

// let Employee: person_details = {
//   id_no: 10,
//   name: "Azhar",
//   age: 24,
//   citizenship: "Pakistani",
//   Currently_working: true,
// };

// console.log(Employee);
// interface plus_Manager_details extends person_details {
//   salary: number;
//   position?: string;
// }

// let Sales_Manager: plus_Manager_details = {
//   id_no: 1,
//   name: "Umair",
//   age: 29,
//   citizenship: "Pakistani",
//   Currently_working: true,
//   salary: 55555555,
//   position: "Manager",
// };

// console.log(Sales_Manager);

//// narrrowing will take the latest data type
// let myname: string | number;

// myname = "umair"
// console.log(myname);
// myname = 44
// console.log(myname.length);

// let countnumber : string = "20000"
// let a = Number(countnumber)
// console.log(countnumber);
// console.log(typeof countnumber);
// console.log(a);
// console.log(typeof a);

// let stringValue: string = "42";
// let numberValue: number = +stringValue;
// console.log(numberValue); // 42

//// interface example

// interface circle {
//   sides: number;
//   diameter?: number;
//   radius?: number;
// }

// interface square {
//   sides: number;
// //   parameter: number;
// //   area: number;
// }

// let ball: circle = {
//     sides : 1,
//     diameter : 34,
//     radius : 17
// };
// let box: square;

// box = ball;
// ball = box;

//  console.log(ball);

//// destructing array and object

// let arr : (string | number) [] = ["umair","hamid ali khan","karachi",30]

// let [myname,fname,mylocation,age] = arr

// console.log(myname, "is my name", "and I am living in karachi" , "and my age is" ,  age );

// let obj = {
//     myname : "umair",
//     fname : "hamid ali khan" ,
//     age : 30
// };

// let {myname,fname,age} = obj

// console.log(obj);

// // unknown type
// let value1: unknown = "zia";
// // console.log((value1 as string).length);
// // generic function
// console.log((<string>value1).length);

// type casting error while changing to other type
// let myname : string = "344444444.33"

// // console.log(myname.length);
// // console.log((myname as number).toFixed); // errror type first convert to unknown

// console.log((myname as unknown as number).toFixed());

// enum color {
//   red,
//   yellow,
//   green,
// }

// // let c: color = color.green;

// // console.log(c);
// // console.log(color);

// // let strcolor: string = color[0];
// // console.log(strcolor);

// enum strcolor2 {
//   red = 10,
//   yellow,
//   green,
// }
// let strcolor2name: number = strcolor2.red;
// console.log(strcolor2);
// console.log(strcolor2name);

// enum  fruits {hemm=2,"apple"=10,banana,lemon}

// enum fruits {}

// console.log(fruits);

// let arr4: (string|number|boolean)[] = [];
// console.log(arr4.push("mango","ssss",2,true));
// console.log(arr4);


