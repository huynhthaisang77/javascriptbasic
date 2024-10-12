this.firstName = "Minh";
this.lastName = "Thu";

const student = {
  firstName: "Minh",
  lastName: "Thao",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Case1
console.log(student.getFullName());

// Case2

const getTeacherName = student.getFullName.bind();
console.log(getTeacherName());
