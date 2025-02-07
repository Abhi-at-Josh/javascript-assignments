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
                                   
                          // Output:
console.log(typeof str);          // string
console.log(typeof num);          // number
console.log(typeof bool);         //Boolean
console.log(typeof arr);          // object
console.log(typeof func);         // function
console.log(typeof undef);        // undefined
console.log(typeof nul);          //object
console.log(typeof notANumber);   // number


console.log(Array.isArray(arr));    // true
console.log(Array.isArray(obj));    // false

console.log(Number.isNaN(num));      // false
console.log(Number.isNaN(bool));     // false
console.log(Number.isNaN(notANumber)); // true
                   