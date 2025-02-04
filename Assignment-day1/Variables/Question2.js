// 2. Use the typeof operator to find the types of different variables. 
// Specially note what t typeof operator returns for arrays, null values and NaN.
//  How can you find if a variable  an array or NaN besides typeof? 

let str = "Hello, World!";
let num = 42;
let bool = true;
let obj = { key: "value" };
let arr = [1, 2, 3];
let func = function() { return "I'm a function"; };
let undef;
let nul = null;
let notANumber = NaN;

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof func);
console.log(typeof undef);
console.log(typeof nul);
console.log(typeof notANumber);


console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

console.log(Number.isNaN(num));
console.log(Number.isNaN(bool));
console.log(Number.isNaN(notANumber));
