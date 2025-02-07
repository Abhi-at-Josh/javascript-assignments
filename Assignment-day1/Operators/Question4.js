// 4. What happens if you pass a regular/invalid JSON string to JSON.parse? 
// What will happen if such an invalid function runs in the program? 
// Will other parts of the code execute correctly after that? 

// When you use an invalid JSON string, the function will throw a SyntaxError

const invalidJson = '{"name": "John", "age": 30,}'; 
const parsedData = JSON.parse(invalidJson); 
console.log('This line will not execute due to the error above.');
///Error undefined:1
// {"name": "John", "age": 30,}
// ^

// SyntaxError: Unexpected token } in JSON at position 27
// at JSON.parse (<anonymous>)
