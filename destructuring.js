const user = { id: 1, username: "mike", email: "mike@mail.com" };
const { username, email } = user;

const colors = ["red", "blue", "green"];
const [first, second] = colors;

console.log(username, email); // mike mike@mail.com
console.log(first, second);   // red blue