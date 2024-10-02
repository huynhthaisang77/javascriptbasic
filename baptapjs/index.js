const use = document.getElementById("hocsinh");
const red = document.getElementById("do");
const student = ["huynhthaisang", "huynhthaisang"];
const update = student.map(function (i) {
  return `<li class="do">${i}</li>`;
});
use.innerHTML = update;
