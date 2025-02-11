// 1. `this` Binding
function regularFunction() {
    console.log(this); 
  }
  const obj = { method: regularFunction };
  obj.method(); // `this` refers to obj
  
  const arrowFunction = () => {
    console.log(this); // `this` refers to the outer scope
  };
  arrowFunction(); // `this` refers to the window or global object
  







  // 2. `arguments` Object
  function regularFunctionWithArgs() {
    console.log(arguments); 
  }
  regularFunctionWithArgs(1, 2, 3); // [1, 2, 3]
  
  const arrowFunctionWithArgs = () => {
    console.log(arguments); // ReferenceError: arguments is not defined
  };
  arrowFunctionWithArgs(1, 2, 3);
  







  // 3. Constructibility (`new` keyword)
  function Person(name) {
    this.name = name;
  }
  const person1 = new Person("Alice");
  console.log(person1.name); // 'Alice'
  
  const ArrowPerson = (name) => {
    this.name = name; // Error: Arrow function cannot be used as a constructor
  };
  try {
    new ArrowPerson("Bob");
  } catch (error) {
    console.log(error.message); // ArrowPerson is not a constructor
  }
  





  
  // 4. Return Behavior
  function add(a, b) {
    return a + b;
  }
  console.log(add(2, 3)); // 5
  
  const addArrow = (a, b) => a + b;
  console.log(addArrow(2, 3)); // 5
  