const name = "Choedra"
const repoCount = 20

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('choedra-cg-pro')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   choedra  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "http//choedra.com/choedra%20gyamtsho"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('choedra'))
// console.log(url.includes('pro'))

console.log(gameName.split('-'))