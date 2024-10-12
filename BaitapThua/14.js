//Viết một hàm nhận vào một số nguyên dương và tính tổng các số từ 1 đến số đó.

const use = function (x) {
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    sum += i;
  }
  return sum;
};
console.log(use(5));
