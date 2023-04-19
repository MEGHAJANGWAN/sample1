const oneArray = [1, 2, 3, 4]
const twoArray = [5, 6, 7, 8]

// 1st method
// const threeArray = oneArray.concat(twoArray)
// console.log(threeArray);

// 2nd method
// const threeArray = [...twoArray, ...oneArray]
// console.log(threeArray);

// console.log(Array.from("foo"));
// console.log(Array.from([1,2,3],x => x*3));


// function manyArguments () {
//     let args = Array.from(arguments)
//     let finalArr = args.map(e => e)
//     console.log(finalArr);
// }

// manyArguments(1,2,3)
// manyArguments(1,2,3,4,5,6,7)

// rest
// function manyArguments() {
//     console.log(typeof args);
//     let finalArr = args.map(e => e)
//     console.log(finalArr);
// }

// function manyArguments2 (...args) {
//     console.log(typeof args);
//     let finalArr = args.map(e => e)
//     console.log(finalArr);
// }

// manyArguments(1,2,3)
// manyArguments2(1,2,3)

// const names = ["superman", "flash"]
// const newNames = ["Batman", ...names, "thor"]

// console.log(...names);

const siteName = "pwSkills"
console.log([...siteName]);
