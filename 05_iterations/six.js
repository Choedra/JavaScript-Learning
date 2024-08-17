// const coding = ['js', 'ruby', 'java']

// const values =coding.forEach( (item) => {
//   // console.log(item);
//   return item;
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//   return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//   if (num > 4) {
//     newNums.push(num)
//   }
// } )
// console.log(newNums);

const books = [
  {title: 'Book One', genre: 'Fiction', publish: 1981, editon: 2004},
  {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, editon: 2008},
  {title: 'Book Three', genre: 'History', publish: 1999, editon: 2007},
  {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, editon: 2010},
  {title: 'Book Five', genre: 'Science', publish: 2009, editon: 2014},
  {title: 'Book Six', genre: 'Fiction', publish: 1987, editon: 2010},
  {title: 'Book Seven', genre: 'History', publish: 1986, editon: 1996},
  {title: 'Book Eight', genre: 'Science', publish: 2011, editon: 201},
  {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, editon: 1989},
];

let userBooks = books.filter( (bk) => bk.genre === 'History' )

 userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === 'History' )

console.log(userBooks);