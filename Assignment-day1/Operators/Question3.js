// 3. Do you think JSON.stringify would work for arrays as well?
//  What about nested objects? What happens if we pass numbers, strings, undefined, null to JSON.stringify? 

//Yes, JSON.stringify() works with arrays, nested objects, and various primitive data types in JavaScript. 

//Arrays:
const arr = [1, 'two', true, null];
console.log(JSON.stringify(arr)); // Output: '[1,"two",true,null]'

// Nested Objects:
const nestedObj = { a: 1, b: { c: 2, d: [3, 4] } };
console.log(JSON.stringify(nestedObj)); // Output: '{"a":1,"b":{"c":2,"d":[3,4]}}'

//Primitive Data Types:
console.log(JSON.stringify(42)); // Output: '42'
console.log(JSON.stringify('hello')); // Output: '"hello"'
console.log(JSON.stringify(false)); // Output: 'false'
console.log(JSON.stringify(null)); // Output: 'null'

const originalObject = {
    name: "John Doe",
    age: 25,
    address: { city: "New York", state: "NY", country: "USA" },
    skills: ["JavaScript", "Node.js", "React"],
    experience: [
      { company: "TechCorp", years: 2 },
      { company: "WebSolutions", years: 3 }
    ],
    metadata: new Date(),
    getDetails: function() {
      return `${this.name} from ${this.address.city}`;
    }
  };
  console.log(originalObject);
  //Print original object
  //Ouput:
        //   {
        //     name: 'John Doe',
        //     age: 25,
        //     address: { city: 'New York', state: 'NY', country: 'USA' },
        //     skills: [ 'JavaScript', 'Node.js', 'React' ],
        //     experience: [
        //       { company: 'TechCorp', years: 2 },
        //       { company: 'WebSolutions', years: 3 }
        //     ],
        //     metadata: 2025-02-05T05:55:44.537Z,
        //     getDetails: [Function: getDetails]
        //   }

  const cloneobject =JSON.stringify(originalObject)
  console.log(cloneobject);
    //Try to deep clone this via JSON methods. Let me know your finding.
    // output:
    // {"name":"John Doe","age":25,"address":{"city":"New York","state":"NY","country":"USA"},"skills":["JavaScript","Node.js","React"],"experience":[{"company":"TechCorp","years":2},{"company":"WebSolutions","years":3}],"metadata":"2025-02-05T05:55:44.537Z"}
  const cloneobject1 =JSON.parse(JSON.stringify(originalObject))
  console.log(cloneobject1);

  //output
    //   {
    //     name: 'John Doe',
    //     age: 25,
    //     address: { city: 'New York', state: 'NY', country: 'USA' },
    //     skills: [ 'JavaScript', 'Node.js', 'React' ],
    //     experience: [
    //       { company: 'TechCorp', years: 2 },
    //       { company: 'WebSolutions', years: 3 }
    //     ],
    //     metadata: '2025-02-05T06:02:58.212Z'
    //   }

    // JSON.stringify: Transforms the original object into a JSON string, which is a textual representation of the object's data structure. 
    // JSON.parse: Parses the JSON string back into a new JavaScript object, creating a complete copy
    