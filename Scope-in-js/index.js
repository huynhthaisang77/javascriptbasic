/*
Score - Phạm vi

Các loại phạm vi:
- Global - Toàn cục
- Code block - Khối mã: let, const
- Local scope - Hàm: var, function 

- Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
- Cách thức một biến được truy cập
- Khi nào một biến bị xoá khỏi bộ nhớ?
   - Biến toàn cục?
   - Biến trong code block & trong hàm?
   - Biến trong hàm được tham chiếu bởi 1 hàm?

*/

// function sang() {
//   var fullName = "sangne";
// }
// sang();
// console.log(fullName);

// const fullName = "sangne";
// function sang(first, last) {
//   console.log(first, last);
//   const age = 20;
//   console.log(age, fullName);
// }
// sang("dang", "chan");
// sang("dang", "buon");
// sang("dang", "nan");

const age = 18;
{
  {
    const age = 15;
    {
      {
        const age = 10;
        {
          const age = 20;
          console.log(age);
          //const age = 50; sai vì khai báo sau khi sử dụng
        }
      }
    }
  }
}
