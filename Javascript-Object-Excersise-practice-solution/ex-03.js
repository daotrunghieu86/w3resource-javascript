var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var counter = 0;
for (var key in student){
  counter++;
}
console.log(counter)