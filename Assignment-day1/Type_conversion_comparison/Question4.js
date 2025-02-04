// 3. Declare a variable let arraySize = 25;.
//  Using a for loop, add numbers from one onwards into an array till the arraySize is reached. 
// 4. Accomplish the same using a while loop. 

let arraySize = 25;
let array = [];
let i = 1;

while (i <= arraySize) {
  array.push(i);
  i++;
}

console.log(array);

