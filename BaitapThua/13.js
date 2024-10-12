//Tạo một hàm nhận vào một mảng số và trả về mảng mới chứa các số lớn hơn 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let use = function (x) {
  return (x = numbers.filter((i) => i > 5));
};
console.log(use());
