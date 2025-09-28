class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I’m ${this.age} years old.`;
  }
}

const john = new Person("John", 25);
console.log(john.greet());
