// set
let emptySet = new Set()
console.log(emptySet.size);
// 0

// let myArray = [1, 2, 3,4]
// let newSet = new Set(myArray)
// console.log(newSet);
// Set(4) {1, 2, 3, 4}

// let myArray = [1, 2, 3, 4, 5, 2, 3]
// let newSet = new Set(myArray)
// console.log(newSet);

let myArray = [1, 2, 4, 5 ,2, 3, 4]
let newSet = new Set([...myArray])
console.log(newSet);
newSet.add(9);
console.log(newSet);
//output = set(6) {1,2,4,5,3,9}
console.log(newSet.has(9));
//output = true
newSet.clear();
console.log(newSet);
//Output = set(0)

//Map
let emptyMap = new Map()
console.log(emptyMap.size);
//output = 0

let arr = [
    [1, "Mithun"],
    [2, "Alka"],
    [3, "Prabir"],
    [4, "Bipul"],
    [5, "Megha"]
];
let newMap = new Map(arr)
newMap.set(3,"Hitesh");
console.log(newMap);
