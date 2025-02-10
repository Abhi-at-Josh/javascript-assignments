// Create a validation class similar to ‘yup’ and add validations for required, min and max
// for strings. Expose an isValid method that returns true or false based on the argument
// passed

class Validator {
    constructor(value) {
      this.value = value;
      this.errors = [];
    }
  
    required() {
      if (!this.value || this.value.trim() === '') {
        this.errors.push('Value is required');
      }
      return this;
    }
  
    min(minLength) {
      if (this.value.length < minLength) {
        this.errors.push(`Value must be at least ${minLength} characters long`);
      }
      return this;
    }
  
    max(maxLength) {
      if (this.value.length > maxLength) {
        this.errors.push(`Value must be no more than ${maxLength} characters long`);
      }
      return this;
    }
  
    isValid() {
      return this.errors.length === 0;
    }
  
    getErrors() {
      return this.errors;
    }
  }

  const validation = new Validator('test')
    .required()
    .min(5)
    .max(10);
  
  console.log(validation.isValid()); // Output :- false 
  console.log(validation.getErrors()); //Output :-  ['Value must be at least 5 characters long']
  