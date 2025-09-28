const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
const even = numbers.filter(num => num % 2 === 0); // [2, 4]
console.log(doubled, even);