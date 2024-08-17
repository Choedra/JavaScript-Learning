// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 1232334242432442342n;



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "doga"];
let myObj = {
  name: "Choedra",
  age: 19,
}

const myFunction = function(){
  console.log("Hello world");
}


// console.log(typeof bigNumber)
// console.log(typeof heros)
// console.log(typeof myObj)
// console.log(typeof myFunction)



// ++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYouTubename = "Crown";

let anotherName = myYouTubename;
anotherName = "Juicy";

console.log(myYouTubename)
console.log(anotherName)

let userOne = {
  email: "choedra999@gmail.com",
  age: 19
}

let userTwo = userOne;

userTwo.email = "gyamtsho999@gmail.com";

console.log(userOne.email)
console.log(userTwo.email)