const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros) // Not a good practice

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // Spread is mostly used
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);
// console.log(another_array);

// console.log(Array.isArray("Choedra"));
// console.log(Array.from("Choedra"));
// console.log(Array.from({name: "Choedra"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


