// Tạo một ô nhập cho phép người dùng nhập văn bản.
// Hiển thị số lượng ký tự đã nhập bên dưới ô nhập.

// Khi người dùng gõ văn bản, số lượng ký tự phải được cập nhật ngay lập tức.

// ví dụ: gõ "hello" thì có 5 kí tự
const test = document.getElementById("use");
const input = document.getElementById("ip");

input.oninput = function () {
  test.innerHTML = input.value;
};
