// way 1
// const map = (arr, func)=>{
//   let newArray = [];

//   for(let i=0; i<arr.length; i++) {
//     newArray.push(func(arr[i]))
//   }
//   return newArray
// }

// way 2
const map = (arr, func)=> arr.reduce((acc, x) => [
  ...acc,
  func(x)
],[])

// should be [2, 4, 6];
console.log(map([1, 2, 3], x => x*2));

//  Should be [ -5, -6, -7, -8, -9, -10, -11];
console.log(map([5, 6, 7, 8, 9, 10, 11], x => -x));

// Should be ['A','B','C','D'];

console.log(map(['a', 'b', 'c', 'd'], x => x.toUpperCase()));

