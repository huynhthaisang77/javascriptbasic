// function cong(a, b) {
//   var sum = a + b;
//   return a + b;
// }
// var ketqua = cong(10, 20);
// console.log(ketqua);

// function nhan(a, b) {
//   let x = a * b;
//   return a * b;
// }
// const pi = 3.14;

// export { nhan, pi };

// Tính Tổng Hai Số
// function tong(a, b) {
//   return a + b;
// }
// const x = tong(5, 10);
// console.log(x);

/*
function timsochan(number) {
  if (number % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
timsochan(2);
timsochan(10000);
*/

// function greet(name) {
//   return "xin chào, " + name;
// }
// var z = greet("sang");
// console.log(z);
// function a(data) {
//   const x = { name: "sang", age: 22 };
//   data(x);
//   console.log(typeof data);
// }

// function use(data2) {
//   console.log(data2);
// }

// // function sum(a, b) {
// //   const total = a + b;
// //   console.log(total);
// // }
// // sum(2, 5);

// a(use);

// let x = function (a, b) {
//   return a + b;
// };
// console.log(x(5, 5));

// // function x(a, b) {
// //   return a + b;
// // }
// // x(10, 10);

// const a = (x, y) => {
//   return x + y;
// };
//console.log(a(10, 10));

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr = {
  name: "sang ne",
  age: 22,
};

let arr2 = [];
// var array = Object.keys(arr).map(function (key) {
//   return arr[key];
// });
// console.log(array);

// function test(a) {
//   let x = [a];
//   x.push(a);
//   return x;
// }
// console.log(test(a));

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0) {
    arr2.push(a[i]);
  }
}
console.log(arr2);
