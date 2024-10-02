//Cho một mảng gồm các tên của học sinh,
//Tìm ra học sinh có tên dài nhất,
// thêm 1 học sinh vào mảng đã cho vị trí bất kì.
// const student = ["sang", "trua", "chieu", "toi"];
// let max = "";
// for (let a = 0; a < student.length; a++) {
//   console.log(max);
//   if (max.length < student[a].length) {
//     max = student[a];
//     console.log(max.length);
//   }
// }

//Tìm ra học sinh có tên ngắn nhất,
// const student1 = ["sang", "trua", "chieu", "toi"];
// let min1 = student1[1];
// for (let a = 0; a < student1.length; a++) {
//   console.log(min1);
//   if (min1.length > student1[a].length) {
//     min1 = student1[a];
//     console.log(min1.length);
//   }
// }

//cho 1 mảng gồm các số ngẫu nhiên sắp xếp theo thứ tự từ bé đến lớn

const mang = [1, 2, 5, 10, 16, 4, 7, 13, 22, 8];
const mang2 = [];
// for (let i = 0; i < mang.length; i++) {
//   if (mang[i]++) {
//     mang2.push(mang[i]);
//   }
// }
// console.log(mang2);

for (let i = 0; i < mang.length; i++) {
  if (mang[i] % 2 === 0) {
    mang2.push(mang[i]);
  }
}
console.log(mang2);

// for (var i = 0; i < mang.length; i++) {
//   for (var j = 0; j < mang.length - i; j++) console.log(j);
//   {
//     if (mang[j] > mang[j + 1]) {
//       var z = mang[j];
//       mang[j] = mang[j + 1];
//       mang[j + 1] = z;
//     }
//   }
// }
// console.log(mang);

// Trên màn hình console.log đếm từ 0 đến 10 sử dụng setinterver,
// let a = 0;
// const interval = setInterval(() => {
//   console.log(a);
//   a++;
//   if (a > 10) {
//     clearInterval(interval);
//   }
// }, 1000);

// let sum = 0;
// const arr = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);
// const tong = sum / arr.length;
// console.log(tong);

// const arr = [1, 2, 3, 4, 5, 6, -7, -8, -9];
// const arr2 = [];
// function soNguyen(value) {
//   return Number.isInteger(value) && value > 0;
// }
// for (let i = 0; i < arr.length; i++) {
//   !soNguyen(arr[i]) ? arr2.push(arr[i]) : null;
// }
// console.log(arr2);
