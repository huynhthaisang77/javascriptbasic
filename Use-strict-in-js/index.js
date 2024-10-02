// "use strict";
// fullName = " huynhthaisang";
// function test() {
//   age = 18;
// }
// test();

// console.log(fullName);

// const student = {
//   name: "sang",
//   profile: {
//     firstName: "trua",
//     lastName: "chieu",
//     introduction: "Girl",
//   },
// };

// const a = student.profile;
// student.profile.introduction = "good girl";
// console.log(a);

function func(obj) {
  obj = JSON.parse(JSON.stringify(obj));
  obj.name = "sang";
  return obj;
}
const a = {
  name: "trua",
};

// func(a);
// console.log(a);

const newCar = func(a);
console.log(a);
console.log(newCar);
