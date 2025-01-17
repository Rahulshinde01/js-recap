//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
// const bigNumber = 3456543576654356754n
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log();

console.log("primitive data type");
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);

console.log();
console.log("Reference data type");

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

