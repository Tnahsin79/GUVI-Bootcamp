function joinFirstLastName({firstName,lastName}) { // we create firstName and lastName variables by destructuring person parameter
  return firstName + ' ' + lastName;
}

const person = {
  firstName: "GUVI",
  lastName: "GEEK",
  age: 3,
  sex: "M"
}

console.log(joinFirstLastName(person)); // GUVI GEEK
