// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 0, 24)
// let myCreatedDate = new Date(2024, 0, 24, 5, 3)
// let myCreatedDate = new Date("2024-05-31")
let myCreatedDate = new Date("2-05-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());  

// `${newDate.getDate()} and the time`

console.log(newDate.toLocaleString('default', {
  weekday: "long"
}))

