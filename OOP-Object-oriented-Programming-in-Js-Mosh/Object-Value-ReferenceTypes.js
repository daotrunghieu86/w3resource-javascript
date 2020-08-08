// PIMITIVE Types
// Example 1
let x1 = 10;
let y1 = x;

x1 = 20;
console.log(x1); // 20
console.log(y1); // 10
// 2 biến x, y được lưu độc lập trên bộ nhớ 'Stack' nên sẽ không bị phụ thuộc lẫn nhau khi x thay đổi giá trị.

// Example 2.1
let ten = 10;
function increase(num) {
  return ++num;
}
console.log(increase(ten)); // 11
console.log(ten); // 10

// hàm increate khởi tạo biến 'num' nhận giá trị là 'ten = 10'
// biến 'num' nằm trong cục bộ (local) của hàm increate(), còn biến 'ten' là 'global'
// khi này biến 'ten' và 'num' là 2 biến độc lập
// nên console.log(ten) sẽ trả giá trị là 10 chứ k phải 11 như của num

// Example 2.2
let obj = {
  ten1: 10
};
function increase(num1) {
  return ++num1;
}
console.log(increase(ten.ten1)); // 11
console.log(ten.ten1); // 10

// ở ví dụ này nhìn có vẻ tương tự nhưng hơi khác một chút mà kết quả vẫn giống nhau :))
// ở đây obj được gán bằng một object (Object là một trong 3 kiểu 'Reference Type')
// nhưng khi increate() khởi tạo biến 'num1' để chạy hàm thì nó lại gán theo kiểu 'Number' (là 1 trong 6 kiểu của 'Value - Primitive Type): 'num1 = ten.ten1 = 10'.
// nên từ đây biến num vẫn là giá trị 'Number' chứ không phải 'Object' đâu nha
// suy ra kết quả tương tự như Example 2.1

//

// REFERENCE Type
// Example 1
let x2 = {
  name: "hieu",
  alias: "tau"
};
// Object sẽ không được lưu trực tiếp vào biến x2 như của x1 (primitive) mà sẽ được lưu ở đâu đó trong bộ nhớ 'Heap'
// nên khi này x2 và y2 đều tham chiếu tới cùng một đối tượng
// bất kỳ thay đổi nào về giá trị của biến 'name' hoặc 'alias' từ x2 hoặc y2 đều có ảnh hưởng đến nhau. Hiểu đơn giản là ghi đè lên object được lưu đó.

let y2 = x2;

x2.name = "huong";
y2.alias = "bi";

console.log(x2);
console.log(y2);

// Example 2
let ten = {
  ten1: 10
};
function increase(num1) {
  return ++num1.ten1;
}
console.log(increase(ten)); // 11
console.log(ten.ten1); // 11
// thấy ở đây biến 'ten1' và 'num1' trả về cùng giá trị 11 của Object "ten"
// vì chúng ta đã có thao tác gán Object (là 1 trong 3 kiểu của 'Reference Type', chứ không gán 'Number' là 1 trong 6 kiểu của 'Value Types'): 'num1 = ten = {  ten1: 10 };'
// nghĩa là cùng tham chiếu tới một Object được lưu đâu đó trên 'Heap' rồi
// nên khi Object 'num1' tăng biến 'ten1' lên 1 đơn vị thì Object 'ten' cũng thấy tăng lên 1 đơn vị
