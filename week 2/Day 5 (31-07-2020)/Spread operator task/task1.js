const person = {
  firstName: "GUVI",
  lastName: "GEEK",
  age: 3,
  sex: "M"
};

var first=person.firstName;
var age=person.age;
var sex=person.sex;

console.log(first); // "GUVI"
console.log(age); // 3
console.log(sex); //M

({first,age,sex} = {firstName:"GUVI",age:3,sex:"M"}); // That's it !

console.log(first); // "GUVI"
console.log(age); // 3
console.log(sex); // M
