// const baitap1 = [10, 20, 30, 100];
// let mang = [];
// Viết một hàm để đảo ngược một mảng mà không sử dụng phương thức reverse()
// for (let i = baitap1.length - 1; i >= 0; i--) {
//   mang.push(baitap1[i]);
// }
// console.log(mang);
//Viết một hàm để loại bỏ các phần tử trùng lặp trong một mảng.
const baitap2 = [5, 10, 10, 20, 20, 30, 30, 100, 100];
function All(arr) {
  const use = {};

  // Đếm số lần xuất hiện của mỗi phần tử
  for (let i = 0; i < arr.length; i++) {
    use[arr[i]] = (use[arr[i]] || 0) + 1;
  }

  // Chỉ giữ lại những phần tử xuất hiện đúng 1 lần
  return arr.filter((item) => {
    console.log(use[item]);
    return use[item] === 1;
  });
}

const result = All(baitap2);
console.log(result);

//Viết hàm nhận vào một mảng và một phần tử, trả về số lần phần tử đó xuất hiện trong mảng

// const arrSang = [23, 23, 34, 21, 21, 435, 56, 56, 234, 657];
// const a = 23;

// let dem = 0;
// for (let i = 0; i < arrSang.length; i++) {
//   if (arrSang[i] == a) {
//     dem += 1;
//   }
// }
// console.log(dem);

// Viết một hàm để loại bỏ tất cả các giá trị "falsy" (false, null, 0, "", undefined, NaN) từ một mảng.
const arrSang = [
  23,
  23,
  34,
  21,
  21,
  null,
  435,
  "",
  undefined,
  56,
  56,
  234,
  657,
];
const a = 23;

let dem = [];
for (let i = 0; i < arrSang.length; i++) {
  if (arrSang[i]) {
    dem.push(arrSang[i]);
  }
}
console.log(dem);
// Viết một hàm để tách một mảng số nguyên thành hai mảng, một chứa các số chẵn và một chứa các số lẻ.
