// 1. What happens when you add a for loop/while loop/switch case block inside a function 
// and use return instead of break? Do statements after the loop run? What is the return value? 
// Can we pass a return value from within a loop? Can you return from inside an if block? 
// What impact does that have? 

// In JavaScript, the return statement is used to exit a function and optionally return a value to the caller. 

function findFirstEvenNumber(numbers) {
    for (let number of numbers) {
      if (number % 2 === 0) {
        return number; // Returns the first even number found
      }
    }
    return null; // Returns null if no even number is found
  }
  
  console.log(findFirstEvenNumber([1, 3, 5, 6, 7])); // Outputs: 6
  