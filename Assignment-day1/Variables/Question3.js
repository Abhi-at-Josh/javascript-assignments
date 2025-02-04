// Use let and const to create arrays and objects. 
// Try modifying, deleting properties within the array or object.
// What do you expect to happen in both cases? What actually happens in both cases.
// What is the difference between an object declared as a let or a const variable? 



const cars = [
    "Saab",
    "Volvo",
    "BMW"
  ]; 

  console.log(cars[0]);
  cars[0] = "Mahindra";  // Modifying the value of array car at index 0
  console.log(cars[0]);
  console.log(cars)

let arr = [1,2,3,4,5,6,7,8,9,10];
let obj = { key: 'value' , key1: 'value1'};
console.log(arr)
console.log(obj)

// Modifying the array and object
arr.push(11); 
obj.newKey = 'newValue'; 
console.log(arr)
console.log(obj)


// Reassigning the array and object
arr = ['a', 'b', 'c']; 
obj = { anotherKey: 'anotherValue' };
console.log(arr)
console.log(obj)


const arr1 = [11,12,13,14,15,16,17,18,19,20];
const obj1 = { key: 'value' };
console.log(arr1)
console.log(obj1) 

// Modifying the array a    nd object
arr1.push(21); 
obj1.newKey = 'newValue'; 
console.log(arr1)
console.log(obj1)

// Attempting to reassign the array and object
// let allows for reassignment of the variable to a new reference, whereas const does not.
arr1 = ['a', 'b', 'c']; 
obj1 = { anotherKey: 'anotherValue' }; 
console.log(arr1)
console.log(obj1)

