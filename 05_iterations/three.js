// for of

const number = [1, 2, 3, 4, 5]

for (const num of number) {
  // console.log(num);
}

const greetings = 'Hello World!'

for (const greet of greetings) {
  // console.log(`Each Char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

console.log(map);

for (const [key, value] of map) {
  // console.log(key, ':-', value);
}

const myObject = {
  game1: 'GTA5',
  game2: 'Couter Strike'
}

// for (const [key, value] of myObject) {
//   console.log(key, ':-', value);
// }