// // Định nghĩa một hàm dựng
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // Thêm một phương thức vào prototype của Person
// Person.prototype.sayHello = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// // Tạo một đối tượng từ hàm dựng
// let person1 = new Person("Sang", 22);

// // Sử dụng phương thức từ prototype
// person1.sayHello(); // Output: "Hello, my name is Sang"

// function doStep1(callback) {
//   console.log("Step 1 done");
//   setTimeout(callback, 1000); // Giả lập chờ 1 giây
// }

// function doStep2() {
//   console.log("Step 2 done");
// }

// doStep1(doStep2); // Output: "Step 1 done" (sau 1 giây) -> "Step 2 done"

// let y = 10;
// if (true) {
//   let y = 20; // Biến `y` này chỉ tồn tại trong khối if
//   console.log(y); // Kết quả là 20
// }
// console.log(y); // Kết quả là 10, vì biến bên ngoài không bị thay đổi
// const person = {
//   name: "sang",
//   age: 22,
//   ablity: ["coder"],
// };

// function use() {
//   let newPerson = { ...person };
//   return newPerson;
// }
// console.log(use());

const user = {
  ten: "sang",
  tuoi: 22,
  banBe: ["vy", "tung", "tuan"],
  diaChi: {
    tinh: "BD",
    quan: "TP",
  },
};
function use({ ten, diaChi: { tinh, quan }, banBe }) {
  const friends = { ...banBe };
  friends.forEach((friend) => {
    console.log(`Bạn của ${ten}: ${friend}`);
  });
  console.log(`Địa chỉ: ${quan}, ${tinh}`);

  return `Bạn của ${ten}: ${friends.join(", ")}. Địa chỉ: ${quan}, ${tinh}.`;
}

const result = use(user);
console.log(result);
