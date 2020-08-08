// Run on https://jsbin.com/?js,output

// Tìm hiểu thêm về 'Stack' and 'Heap'

//  PRIMITIVE types work
var name = "hieu";
console.log(name); // hieu

var secondName = name;
console.log(secondName); // hieu

name = "dao hieu";
console.log(secondName); // hieu
console.log(name); // dao hieu
// Khi này bộ nhớ (ở 'Stack') sẽ lưu 2 property 'name' và 'secondName' với các giá trị tương ứng ở 2 vị trí khác nhau theo 'linear data structure' ( nghĩa là theo kiểu chiều ngang tuyến tính)

//  REFERENCE types work
var person = {
  name: "person",
  age: 22,
  hobbies: ["read book", "learn code", "learn english"]
};

var thirdPerson = {
  name: "thirdPerson",
  age: 22,
  hobbies: ["read book", "learn code", "learn english"]
};

//

// var secondPerson = person;

// ====== sử dụng Object.assgin({}, person) =====
// Nối 2 Object vào với nhau. Đối số đầu tiên của 'assign' có thể là object mới hoặc object cũ nhé.

var secondPerson = Object.assign({}, person);
secondPerson.name = "secondPerson";
// Tại đây trên 'heap' sẽ lưu một vị trí lưu trữ mới cho "secondPerson" chứ không dùng chung với 'person'

console.log(secondPerson);
// ==============================================

//

// ARRAY cũng là 'Reference' nha. Nên việc lấy giá trị 'gốc'(từ person khi nó chưa được custom) của mảng cũng sẽ gặp tý khó khăn.
// Nếu ta lấy giá trị mảng như này: 'var myHobbies = person.hobbies'

var myHobbies = person.hobbies;

console.log("myHobbies:... " + myHobbies); // "myHobbies .. : read book,learn code,learn english"
// nó trả về đúng hobbies gốc từ person. Nhưng khi thêm 'DaoTrungHieu' vào nó sẽ tự động cập nhật mà không còn là array gốc nữa.
// Như này: ["read book", "learn code", "learn english", "DaoTrungHieu"]
// vậy nên sử dụng 'slice()' method để tạo cmnl 1 cái array mới, bộ nhớ được lưu riêng hoàn toàn trên 'heap' thay vì lấy ra từ person.
var myHobbies = person.hobbies.slice();

//

person.name = "change Person";
// console.log(person.name); // dao hieu (Point the same object)
console.log(person); // dao hieu (Point the same object)
console.log(person.hobbies.push("DaoTrungHieu"));
// console.log(secondPerson.name); // dao hieu (Point the same object)
console.log(secondPerson); // dao hieu (Point the same object)
// Bộ nhớ tạm thời ở đây là 'Heap'
// what happended?  Simply, our object is 'Reference Type'

console.log(thirdPerson); // hieu (Point the other object)
// Đương nhiên là vậy vì trên bộ nhớ, object của 'person' và 'thirdPerson' được lưu ở 2 vị trí độc lập

console.log("myHobbies:... " + myHobbies); // thấy sự khác biệt với kết quả trả về từ việc 'chưa dùng / dùng' slice() method
