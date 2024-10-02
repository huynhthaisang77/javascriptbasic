/*

# Closure
Là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó

## Úng dụng

- Viết code ngắn gọn hơn
- Biểu diễn, ứng dụng tính Private trong OOP
## Lưu ý
- Biến được tham chiếu trong closure sẽ không được xoá khỏi bộ nhớ khi hàm cha thực thi xong
- Các khái niệm Js nâng cao rất dễ gây nhầm lẫn
*/
/*
function cha() {
  let x = 0;
  function con() {
    return ++x;
  }
  return con;
}

const a = cha;

console.log(a);
//1
console.log(a);
//2
console.log(a);
//3
*/
/*
function createCha(namespace) {
  function cha(message) {
    console.log(`[${namespace}] ${message}`);
  }
  return cha;
}

  ##  Register.js

const infoCha = createCha("Info");

infoCha("Bắt đầu gửi mail");
infoCha(".................");
infoCha("..........................");
*/
// GET lấy dữ liệu từ key
// SET ghi vào database
function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };
  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
      save();
    },
  };
  return storage;
}

const profile = createStorage("profile");
profile.set("fullName", "sang ne");
profile.set("age", 22);
profile.set("address", "QN");
console.log(profile);

function createApp() {
  const cars = [];

  return {
    add(car) {
      cars.push(car);
    },
    show() {
      console.log(cars);
    },
  };
}

const app = createApp();
app.add("rr");
app.show();
app.add("honda");
