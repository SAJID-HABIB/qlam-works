// let person = {
//   name : "sajid",
//   age : 20
// }

// console.log(person);


let student = {
  name : "sajid",
  age : 20,
  marks :78,
  fuc : function abc() {
   console.log(this.name,this.age);
  }
}

student.fuc();


cl