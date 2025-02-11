// ● Create a memoised function that returns the cached value when the same arguments
// are passed.
function memoize(fn) {
    const cache = {};
  
    return function(...args) {
      const key = JSON.stringify(args); 
      if (cache[key]) {
        console.log('Returning cached result');
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  const add = (a, b) => a + b;   //Output :- 5
  const memoizedAdd = memoize(add);
  
  console.log(memoizedAdd(2, 3));  //Output :- 5
  console.log(memoizedAdd(2, 3));  //Output :- Returning cached result, 5
  console.log(memoizedAdd(5, 7));  //Output :- 12
  