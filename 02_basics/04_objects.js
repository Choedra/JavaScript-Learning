// Singleton
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Choedra"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Choedra",
      lastname: "Gyamtsho"
    }
  }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = { ...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
  {
    id: 1,
    email: "h@gmail.com"
  },
  {
    id: 1,
    email: "b@gmail.com"
  },
  {
    id: 1,
    email: "c@gmail.com"
  },
  {
    id: 1,
    email: "d@gmail.com"
  }
]
// console.log(users[2].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  courseName: "JS",
  price: "999",
  courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//   "name": "Choedra", // JSON
//   "age": "19",
// }