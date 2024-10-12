// Bài tập 1
// Tạo đội tượng
// var People = {
//   name: "sang",
//   age: 22,
//   address: "Bình định",
//   job: "CNTT",
//   interest: "game",
// };

// People.job = "oto";
// console.log(People.job);
// Thêm hành động vui, chơi
// var use = new Object();
// People.play = "video";
// People.laugh = "fun";
// console.log(People.play);
// const student = [
//   { name: "A", age: 22 },
//   { name: "B", age: 5 },
//   { name: "C", age: 2 },
//   { name: "D", age: 12 },
//   { name: "E", age: 10 },
//   { name: "F", age: 15 },
//   { name: "G", age: 8 },
//   { name: "H", age: 19 },
//   { name: "H", age: 10 },
//   { name: "k", age: 7 },
// ];

// student.forEach(function (item) {
//   item.age = item.age + 1;
// });

// console.log(student);
// const update = student.map(function (i) {
//   return {
//     name: i.name,
//     age: i.age + 1,
//   };
// });
// console.log(update);

// const use = student.filter(function (i) {
//   return i.age > 10;
// });
// console.log(use);

var a = [];

for (let i = 0; i < 10; i++) {
  a.push(Math.floor(Math.random(10) * 10));
}
console.log(a);
var sum = 0;
for (let x = 0; x < a.length; x++) {
  sum += a[x];
}
console.log(sum);
