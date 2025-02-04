// 3. Do you think JSON.stringify would work for arrays as well?
//  What about nested objects? What happens if we pass numbers, strings, undefined, null to JSON.stringify? 

//Yes, JSON.stringify() works with arrays, nested objects, and various primitive data types in JavaScript. 

//Arrays:
const arr = [1, 'two', true, null];
console.log(JSON.stringify(arr)); // Output: '[1,"two",true,null]'

// Nested Objects:
const nestedObj = { a: 1, b: { c: 2, d: [3, 4] } };
console.log(JSON.stringify(nestedObj)); // Output: '{"a":1,"b":{"c":2,"d":[3,4]}}'

//Primitive Data Types:
console.log(JSON.stringify(42)); // Output: '42'
console.log(JSON.stringify('hello')); // Output: '"hello"'
console.log(JSON.stringify(false)); // Output: 'false'
console.log(JSON.stringify(null)); // Output: 'null'






