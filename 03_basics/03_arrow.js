const user = {
  username: "Choedra",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//   let username = "Choedra"
//   console.log(this.username);
// }

// chai()

// const chai = function () {
//   let username = "Choedra"
//   console.log(this.username);
// }

const chai = () => {
  let username = "Choedra"
  console.log(this.username);
}


// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Choedra"})


console.log(addTwo(4, 5))