const myObject = {
  js: 'JavaScript',
  cpp: 'C++',
  rb: 'Ruby',
  swift: 'Swift by apple'
}

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming =['js', 'rb', 'java', 'cpp']

for (const key in programming) {
  // console.log(programming[key]);
}

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

for (const key in map) {
  console.log(key);
}