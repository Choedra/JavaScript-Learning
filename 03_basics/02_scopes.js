let a = 200

if (true) {
  let a = 10
  const b = 20
  console.log("INNER: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Choedra"

  function two() {
    const website = "youtube"
    // console.log(username);
  }
  // console.log(website);
  // two()
}

// one()


if (true) {
  const username = "choedra"
  if (username === "choedra") {
      const website = " youtube"
      // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// ++++++++ interesting +++++++++

// addOne(5)
function addOne(num){
  return num + 1
}


// addTwo(5) // cannot access before initialization
const addTwo =function(num) {
  return num + 2
}
