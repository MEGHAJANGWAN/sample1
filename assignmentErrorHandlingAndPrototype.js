// function convertToNumber (str) {
//       let num = Number(str);
//       if (isNan (num)) {
//         return "Invalid Number";
//       }
//       return num;
// }

// console.log(convertToNumber("42")); // Output: 42
// console.log(convertToNumber("3.14")); // Output: 3.14
// console.log(convertToNumber("hello")); // Output: "Invalid number"


function getPerson (obj) {
    try{
        if (typeof obj !== object || obj === null || !("name" in obj) || !("age" in obj)) {
            throw new Error("Invalid parameter type");
        }
        return `Name : ${obj.name}, Age : ${obj.age}`;
    } catch (err) {
        return err.message;

    }
}

const person1 = { name: "John", age: 30 };
console.log(getPerson(person1)); // Output: "Name: John, Age: 30"

const person2 = { name: "Jane" };
console.log(getPerson(person2)); // Output: "Invalid parameter type"

const person3 = "not an object";
console.log(getPerson(person3)); // Output: "Invalid parameter type"
