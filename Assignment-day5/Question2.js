
// Implement a Fibonacci sequence generator using a generator function in
// JavaScript.

function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
      yield a; 
      [a, b] = [b, a + b]; 
    }
  }
  const fib = fibonacci();
                                  // Output:----
  console.log(fib.next().value); // 0
  console.log(fib.next().value); // 1
  console.log(fib.next().value); // 1
  console.log(fib.next().value); // 2
  console.log(fib.next().value); // 3
  console.log(fib.next().value); // 5
  console.log(fib.next().value); // 8
                                
  