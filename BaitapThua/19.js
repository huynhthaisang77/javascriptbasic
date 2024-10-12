// Tạo một hàm trả về tổng của tất cả các số nguyên trong một mảng bất kỳ.
let tong = [-1, -2, -3, -4, -5, -6, -7, -8, -9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arr(mang) {
  let sum = 0;
  for (let i = 0; i < mang.length; i++) {
    sum += mang[i];
  }
  return sum;
}
console.log(arr(tong));
