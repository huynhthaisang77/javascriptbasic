//Cho một mảng gồm các tên của học sinh,
//Tìm ra học sinh có tên dài nhất,
//thêm 1 học sinh vào mảng đã cho vị trí bất kì.
/*
const student = ["sang", "linhng", "tram"];
let student1 = "";

for (let i = 0; i < student.length; i++) {
  if (student1.length < student[i].length) {
    student1 = student[i];
  }
}
student.push("trang");
console.log(student);
console.log(student1);
*/

//Cho 1 mảng danh sách tổng tiền của bill trong ngày,
//- Tính tổng tất cả các bill,
//- Tính trung bình trên mỗi bill
//- Trừ thuế VAT trên nmỗi bill và VAT là 10%

// const bill = [1, 5, 3, 7, 9, 2, 4, 6, 8, 10, 2313, 213, 12, 312, 312, 3, 123];
// let sum = 0;

// for (let i = 0; i < bill.length; i++) {
//   sum += bill[i];
// }
// const tbcong = sum / bill.length;
// const tongbill = sum * 0.9;
// console.log(sum);
// console.log(tbcong);
// console.log(tongbill);

//Danh sách học sinh:
//- Bài 1: Cộng tất cả số tuổi của các học sinh lên 1.
//- Bài 2: Lọc danh sách học sinh và tìm ra danh sách họcsinh cóTên bắt đầu bằngchữ A.
//- Bài 3: Tìm tất cả học sinh có số tuổi bằng nhau và đưa vào mảng mới. in ra luôn

const students = [
  { name: "Aml", age: 24 },
  { name: "thuaml", age: 23 },
  { name: "sangml", age: 22 },
  { name: "sangne", age: 22 },
];
// const students1 = students.map((stu) => {
//   return { ...stu, age: (stu.age += 1) };
// });
// console.log(students1);
// const students2 = students.filter((stu) => {
//   return stu.name.startsWith("A");
// });
// console.log(students2);

// Sử dụng object để nhóm học sinh theo tuổi
const arr = {};

// Nhóm học sinh theo tuổi
students.forEach((student) => {
  if (!arr[student.age]) {
    arr[student.age] = [];
  }
  arr[student.age].push(student);
});

// Tạo mảng mới chứa các học sinh có cùng tuổi
const arr1 = Object.values(arr).filter((group) => group.length > 1);

console.log(arr1);

/*
const data = [
    {name: 'sangml', age: 26},
    {name: 'sangml111', age: 26},
    {name: 'sangml4', age: 29},
    {name: 'sangml2', age: 27},
    {name: 'sangml311', age: 28},
    {name: 'sangml6', age: 31},
    {name: 'sangml3', age: 28},
    {name: 'sangml5', age: 30},
    {name: 'sangml6', age: 31},
    {name: 'sangml7', age: 32},
]

const groupedByAge = data.reduce((acc, item) => {
    if (!acc[item.age]) {
        acc[item.age] = [];
    }
    acc[item.age].push(item);
    return acc;
}, {});


const data_age = [];
data.forEach(item => {
    if (!data_age[item.age]) {
        data_age[item.age] = [];
    }
    data_age[item.age].push(item);
});

const data_age_map = new Map();
data.forEach(item => {
    if (!data_age_map.has(item.age)) {
        data_age_map.set(item.age, []);
    }
    data_age_map.get(item.age).push(item);
});
*/
