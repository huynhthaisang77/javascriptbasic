//Tạo một hàm nhận vào một chuỗi và trả về số lần xuất hiện của một ký tự cụ thể trong chuỗi đó.

const arr = (x) => {
  const list = {};
  for (let i = 0; i < x.length; i++) {
    list[x[i]] = (list[x[i]] || 0) + 1;
  }

  return;
};
console.log(arr(""));
