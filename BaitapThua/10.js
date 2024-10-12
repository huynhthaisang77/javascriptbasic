// Sử dụng `filter()` để lọc ra các số lẻ từ mảng `[1, 2, 3, 4, 5, 6, 7]`.

let numbers = [1, 2, 3, 4, 5, 6, 7];

let arr = numbers.filter((i) => {
  return i % 2 !== 0;
});
console.log(arr);
