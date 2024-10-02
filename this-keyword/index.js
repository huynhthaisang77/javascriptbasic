/*
 This Keyword

 Từ khoá this trong js đề cập đến đối tượng mà nó thuộc về

 ĐẶC TÍNH
1. Trong một phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu.)
2. Đứng ngoài phương thức, this tham chiếu tới đối tượng global

LƯU Ý
+ THIS trong hàm tạo là đại diện cho đối tượng sẽ được tạo
+ THIS trong một hàm là undefined khi ở strict mode
+ Các phương thức bind(), call(), apply(), có thể tham chiếu this tới đối tượng khác

*/

// const iphone16 = {
//   // Thuộc tính - Property
//   name: "iphone 16",
//   color: "black",
//   weight: 500,

//   // Phương thức - Method
//   takePhoto() {
//     console.log(this);
//   },
//   objCon: {
//     methodCon() {
//       console.log(this);
//     },
//   },
// };
// // console.log(iphone16.takePhoto());
// iphone16.objCon.methodCon();

function Car(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.run = function () {
    console.log("run...", this);
  };
}
const merceders450 = new Car("Mesrcedes", "black", "500");
console.log(merceders450.run());
