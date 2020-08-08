// PROCEDUAL PROGRAMING
// biến và function tách riêng, ở những side khác nhau
let baseSalary = 30000;
let overtime = 20;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

// OPJECT-ORIENTED PROGRAMMING
// 
// ENCAPSULATION: - The implementation and state of each object are privately held inside a defined boundary, or class. Other objects do not have access to this class or the authority to make changes but are only able to call a list of public functions, or methods. This characteristic of data hiding provides greater program security and avoids unintended data corruption.

// the best function are those with no parameters! - Uncle Bob - Robert C Martin
// càng ít tham số càng tốt để dễ dàng sử dụng và bảo trì 
// các tham số 
let employee = {
    baseSalary : 30000,
    overtime = 20,
    rate = 20,
    getWage = function() {
        return this.baseSalary + this.overtime * this.rate;
    }
}
employee.getWage();



// INHERITANCE: - Relationships and subclasses between objects can be assigned, allowing developers to reuse a common logic while still maintaining a unique hierarchy. This property of OOP forces a more thorough data analysis, reduces development time and ensures a higher level of accuracy.

