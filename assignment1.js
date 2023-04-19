// Data types

// 1. string
// let a = "The course is very useful."

// 2. Number
// let b = 456;

// 3. Null
// let noValue = null;

// 4. Boolean (true , false)
// let isLogin = true;

// 5. Undefined
// let name;

// 6. Array 
// let arr = [1,2,3,4,"Megha", true]
// console.log(arr);

// 7. object 
// let person = { name: "Maddy", age: 23};
// console.log(person);

// 8. symbol
// let id = symbol ("id");

// 9. Big Int
// let number = 2344566755489n;


// let recentlyViewedProducts = ["Book", "Pen", "Water Bottle", "Bag", "Jeans", "Shoes", "Sandals", "T-shirt", "Chair", "Table"];
// console.log(recentlyViewedProducts);

// let students = { 1: "Aayush", 2: "Bipul", 3: "Chandan", 4: "Deepak", 5: "Ishwar"};
// console.log(students);

// // string
// let a = "I love my country."
// console.log(typeof a);

// // 2. Number

// // i) Integer
// let num1 = 3454;
// console.log(typeof num1);

// // ii) floating value
// let num2 = 23.4;
// console.log(typeof num2);

// // iii) infinity
// let num3 = Number.POSITIVE_INFINITY;
// console.log(typeof num3);

// // iv) NaN (Not a Number);
// let var1 = NaN;
// console.log(typeof var1);

// // 3. BigInt
// let var2 = 3452n;
// console.log(typeof var2);

// // 4. Boolean
// let isLogin = true;
// console.log(typeof isLogin);

// // 5. Undefined
// let var3 = undefined;
// console.log(typeof var3);

// // 6. Null
// let var4 = null;
// console.log(typeof var4);

// // 7. Symbol
// let var5 = Symbol("Physics wallah");
// console.log(typeof var5);

// // 8. Object

// // i) object
// let a1 = {name: "Megha", age:23};
// console.log(typeof a1);

// // ii) Array
// let a2 = [1,2,3,4,"Pooja",true];
// console.log(typeof a2);


// let number = 2;
// console.log(`${number} * 1 = ${number * 1}`);
// console.log(`${number} * 2 = ${number * 2}`);
// console.log(`${number} * 3 = ${number * 3}`);
// console.log(`${number} * 4 = ${number * 4}`);
// console.log(`${number} * 5 = ${number * 5}`);
// console.log(`${number} * 6 = ${number * 6}`);
// console.log(`${number} * 7 = ${number * 7}`);
// console.log(`${number} * 8 = ${number * 8}`);
// console.log(`${number} * 9 = ${number * 9}`);
// console.log(`${number} * 10 = ${number * 10}`);

// let num1 = 50;
// let num2 = 2;

// addition
// console.log ("sum of the two numbers:" , num1 + num2);

// subtraction
// console.log("Subtraction of the numbers:", num1 - num2);

// multiplication
// console.log("Multiplication of the numbers:", num1 * num2);

// division 
// console.log("division of the numbers: ", num1 / num2);

// modulus
// console.log("Modulus of the numbers:", num1 % num2);

// exponentiation
// console.log("Exponentiation of the number:" ,num1 ** num2);

// // perimeter of the rectangle
// let lenght = 12;
// let width = 6;
// let perimeterOfRectangle = 2 * (lenght + width);
// console.log(perimeterOfRectangle);

// // equal
// let a = 10;
// let b = 20;
// console.log(a == b); // Output : false

// let a1 = 50;
// let b1 = 50;
// console.log(a1 == b1); // Output : true

// // not equal
// let a2 = 40;
// let b2 = 50;
// console.log(a2 != b2);  // Output : true

// let a3 = 35;
// let b3 = 35;
// console.log(a3 != b3); // Output : false

// // strictly equal
// let a4 = 34;
// let b4 = "34";
// console.log(a4 === b4); // Output : false

// let a5 = 66;
// let b5 = 66;
// console.log(a5 === b5); // Output : true

// // Greater than
// let a6 = 88;
// let b6 = 55;
// console.log(a6 > b6); // Output : true
// console.log(a6 < b6); // Output : false

// // Less than
// let a7 = 67;
// let b7 = 89;
// console.log(a7 < b7); // Output : true
// console.log(a7 > b7); // Output : false

// // Greater than or equal to 
// let a8 = 78;
// let b8 = 67;
// let c1 = 78;
// console.log(a8 >= b8); // Output : true
// console.log(b8 >= a8 ); // Output : false
// console.log(a8 >= c1); // Output : true

// // less than or equal to
// let a9 = 89;
// let b9 = 98;
// let c2 = 89;
// console.log(a9 <= b9); // Output : true
// console.log(b9 <= a9 ); // Output : false
// console.log(a9 <= c2); // Output : true


// //Conditions
// let trafficLight = "red";

// if (trafficLight == "red"){
//     console.log("Vehicle must stop");

// }else if(trafficLight == "yellow"){
//     console.log("Wait");

// }else if (trafficLight == "green"){
//     console.log("Go");
 
// }else{
//     console.log("invalid traffic light");
// }

// // Output : Vehicle must stop

// 

// let num = 15;

// if(num % 5 == 0 && num % 3 == 0) {
//     console.log("FizzBuzz");
// }else if(num % 5 == 0){
//      console.log("Buzz");
// }else if (num % 3 == 0){
//     console.log("Fizz")
// }else{
//     console.log("invalid input");
// }
// // Output: FizzBuzz

//  

// const monthNumber = 8;

// switch (monthNumber) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//          console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid month number");
// }
// // Output: August

// 

// let number = -7;
// number == 0
// ? console.log("The number is zero")
// : number >0
// ? console.log("The number is greater than zero")
// :console.log("The number is lesser than zero");
// // Output : The number is lesser than zero

// let num = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log ( `${num} * ${i} = ${num * i}`);
// }

let num = 20;

for (let i = 1; i <= num; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
}
