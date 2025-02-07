// 2. What makes a method mutating or non mutating in Javascript? Find out whether each of the following methods are mutating or non-mutating. How can you verify this?: ○ push 
// ○ pop 
// ○ filter 
// ○ find 
// ○ sort 
// ○ map 

let originalArray = [1, 2, 3];

// 1. push() - Mutating
let newLength = originalArray.push(4);
console.log('After push:', originalArray); 
// Output: [1, 2, 3, 4]

// Reset the array
originalArray = [1, 2, 3];

// 2. pop() - Mutating
let removedElement = originalArray.pop();
console.log('After pop:', originalArray); 
// Output: [1, 2]


originalArray = [1, 2, 3];

// 3. filter() - Non-Mutating
let filteredArray = originalArray.filter(num => num > 1);
console.log('After filter - original:', originalArray); 
// Output: [1, 2, 3]
console.log('After filter - new:', filteredArray);    
  // Output: [2, 3]


originalArray = [1, 2, 3];

// 4. find() - Non-Mutating
let foundElement = originalArray.find(num => num > 1);
console.log('After find - original:', originalArray); 
// Output: [1, 2, 3]
console.log('After find - found:', foundElement);     
// Output: 2

// Reset the array
originalArray = [3, 1, 2];

// 5. sort() - Mutating
let sortedArray = originalArray.sort();
console.log('After sort:', originalArray); 
// Output: [1, 2, 3]


originalArray = [1, 2, 3];

// 6. map() - Non-Mutating
let mappedArray = originalArray.map(num => num * 2);
console.log('After map - original:', originalArray); 
// Output: [1, 2, 3]
console.log('After map - new:', mappedArray);        
// Output: [2, 4, 6]

// output
// After push: [ 1, 2, 3, 4 ]
// After pop: [ 1, 2 ]
// After filter - original: [ 1, 2, 3 ]
// After filter - new: [ 2, 3 ]
// After find - original: [ 1, 2, 3 ]
// After find - found: 2
// After sort: [ 1, 2, 3 ]
// After map - original: [ 1, 2, 3 ]
// After map - new: [ 2, 4, 6 ]
