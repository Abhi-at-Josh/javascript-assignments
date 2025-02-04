// 1. How will you create a new copy of the object below while updating the value of address.details[0] to “5“? 
// { 
// name:”Harry Potter”, 
// age: 12, 
// address: { 
// details: [“4”, “Privet Drive”], 
// area:”Little Whinging”, 
// city: “Surrey”, 
// state: “England” 
// } 
// } 


const originalObject = {
    name: "Harry Potter",
    age: 12,
    address: {
      details: ["4", "Privet Drive"],
      area: "Little Whinging",
      city: "Surrey",
      state: "England"
    }
  };
const newObject = structuredClone(originalObject);
newObject.address.details[0] = "5";
console.log(newObject);
  


// Output
// {
//     name: 'Harry Potter',
//     age: 12,
//     address: {
//       details: [ '5', 'Privet Drive' ],
//       area: 'Little Whinging',
//       city: 'Surrey',
//       state: 'England'
//     }
//   }