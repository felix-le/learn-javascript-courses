const add = (x,y) => x+y;
const subtract = (x,y) => x - y;

const combine2and3 = func => func(2,3)

console.log("🚀 ~ file: 1.passFnAsArgs.js ~ line 6 ~ combine2and3(add)", combine2and3(add));

console.log("🚀 ~ file: 1.passFnAsArgs.js ~ line 8 ~ combine2and3(subtract)", combine2and3(subtract));
console.log("🚀 ~ file: 1.passFnAsArgs.js ~ line 9 ~ combine2and3(Math.max)", combine2and3(Math.max));