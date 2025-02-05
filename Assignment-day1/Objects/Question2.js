// 2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example: 
// let obj = { 
// a:”Apple”, 
// b:[“Basketball”,”Baseball”], 
// c: { 
// call: “cellphone”

// }, 
// d: “Dog” 
// } 
// filterObject(obj) //This should return {a:”Apple”, d:”Dog”}


function filterObj(obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(
        ([key, value]) => typeof value !== 'object' || value === null
      )
    );
  }
  
  let obj = {
    a: "Apple",
    b: ["Basketball", "Baseball"],
    c: {
      call: "cellphone"
    },
    d: "Dog"
  };
  
  let filteredObj = filterObj(obj);
  console.log(filteredObj); 
  
//Output :{ a: 'Apple', d: 'Dog' }
