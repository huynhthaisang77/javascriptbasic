// Viết một chương trình kiểm tra xem một chuỗi có phải là chuỗi đảo ngược của chuỗi khác không.
const a = "sang";
const b = "gnas";

function checkHamDaoNguoc(a, b) {
  for (let i = 0, j = b.length - 1; i < a.length; i++, j--) {
    if (a[i] == b[j]) {
      console.log("chuỗi a là chuỗi đảo ngược b");
    } else {
      console.log("chuỗi a không phải chuỗi đảo ngược b");
    }
    return;
  }
}
checkHamDaoNguoc(a, b);
