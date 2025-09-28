const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1,2,3,4,5,6]

const person = { name: "Anna", age: 22 };
const updatedPerson = { ...person, city: "Abuja" };

console.log(combined);
console.log(updatedPerson);