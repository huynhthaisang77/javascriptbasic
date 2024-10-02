let a = 0;
const h1 = document.getElementById("h1");
const tong = document.getElementById("add");
const tru = document.getElementById("unAdd");
const nhan = document.getElementById("addd");
const chia = document.getElementById("unAddd");
const an = document.getElementById("an");
const hien = document.getElementById("hien");
const red = document.getElementById("do");
const black = document.getElementById("den");
const x = document.getElementById("number");

tong.onclick = function () {
  a += 1;
  console.log(a);
  x.innerHTML = a;
};
tru.onclick = function () {
  a -= 1;
  console.log(a);
  x.innerHTML = a;
};
nhan.onclick = function () {
  a *= 2;
  console.log(a);
  x.innerHTML = a;
};
chia.onclick = function () {
  a /= 2;
  console.log(a);
  x.innerHTML = a;
};
an.onclick = function () {
  h1.classList.add("an");
  h1.classList.remove("hien");
  h1.innerHTML = a;
};
hien.onclick = function () {
  h1.classList.add("hien");
  h1.classList.remove("an");
  h1.innerHTML = a;
};
red.onclick = function () {
  h1.classList.add("do");
  h1.classList.remove("den");
  h1.innerHTML = a;
};
black.onclick = function () {
  h1.classList.add("den");
  h1.classList.remove("do");
  h1.innerHTML = a;
};
