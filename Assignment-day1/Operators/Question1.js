// 1. What is the difference between ++i and i++? 

// ++i (Pre-increment)
// The increment happens before the value of i is used in the expression.
// It first increments i by 1, then returns the updated value.
let i = 5;
let result = ++i;

console.log(result); // Output: 6
console.log(i); 


// i++ (Post-increment)
// The increment happens after the value of i is used in the expression.
// It first returns the current value of i, then increments i by 1.

let a = 5;
let result1 = a++;

console.log(result1); // Output: 5
console.log(a);      // Output: 6