function sayMyName() {
  console.log("C");
  console.log("H");
  console.log("O");
  console.log("E");
  console.log("D");
  console.log("R");
  console.log("A");
}
// sayMyName()

// function addTwoNumbers(number1, number2) {

//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {

  // let result = number1 + number2
  // return result
  return number1 + number2  
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam") {
  if(!username){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("Choedra"))
// console.log(loginUserMessage("Choedra"))

function calculateCartPrice(val1, val2, ...num1) {
  return num1
}
// console.log(calculateCartPrice(200, 300, 100, 400))

const user = {
  username: "Choedra",
  price: 199
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
  username: "Gyamtsho",
  price: 299
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
  return getArray[0]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10, 30, 50]));