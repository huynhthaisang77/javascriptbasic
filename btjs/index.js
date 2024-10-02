// ban đầu là nhập input sau đó click phép tính,
// thì bây giờ thay đổi hướng làm.
// Click phép tính trước sau đó nhập vào input.
// Nên có 1 nút submit hoặc nút = để render ra giao diện
var elements = {};
var elementIds = [
  "number",
  "equal",
  "curved",
  "subtract",
  "core",
  "divide",
  "use",
  "number",
];

elementIds.forEach(function (item) {
  var element = document.getElementById(item);
  elements[item] = element;
});

// elements.btn.onclick = function () {
//   alert("Hello, world!");
// };
a = 0;
b = "";
// const title = document.getElementById("number");
// const cong = document.getElementById("addcong");
// const tru = document.getElementById("unaddtru");
// const nhan = document.getElementById("addd");
// const chia = document.getElementById("unAdd");
// const ip = document.getElementById("use");
// const click = document.getElementById("add");

elements.curved.onclick = function () {
  b = "+";
};
elements.subtract.onclick = function () {
  b = "-";
};
elements.core.onclick = function () {
  b = "*";
};
elements.divide.onclick = function () {
  b = "/";
};
elements.equal.onclick = function () {
  if (b == "+") {
    a += parseInt(elements.use.value);
    elements.number.innerHTML = a;
  }
  if (b == "-") {
    a -= parseInt(elements.use.value);
    elements.number.innerHTML = a;
  }
  if (b == "*") {
    a *= parseInt(elements.use.value);
    elements.number.innerHTML = a;
  }
  if (b == "/") {
    a /= parseInt(elements.use.value);
    elements.number.innerHTML = a;
  }
};
