// Tạo một đối tượng "người dùng" với các phương thức `getFullName()` và `getAge()`.
const user = {
  firstName: "Sang", // Tên riêng
  lastName: "huynh", // Họ

  // Phương thức trả về họ và tên đầy đủ
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  birthYear: 2002, // Năm sinh

  // Phương thức tính tuổi dựa trên năm hiện tại
  getAge: function () {
    const Year = new Date().getFullYear();
    return Year - this.birthYear;
  },
};

console.log(user.getFullName()); // Kết quả: "Sang Nguyen"
console.log(user.getAge()); // Kết quả: Tính tuổi dựa trên năm hiện tại, ví dụ: 20 nếu là năm 2024
