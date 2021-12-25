// declare a constant variable with let
const name = 'Sandro'

// creat a number variable with let
let age = 39

// create a constant boolean variable with const
const hasHobbies = true

// change the value of a the "name" variable (it should produce an error)
// name = 'Alessandro'

// But we can also change the value of the "age" variable
age = 40

// create or declare a function
const summarizeUser = (userName, userAge, userHasHobbies) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobbies
  );
};

// create a shorter syntax for an arrow function 
// with no curly braces and no return statement
const add = (a, b) => a + b;

// create a much shorter syntax for an arrow function 
// with one argument, no curly braces, and no return statement
const addOne = a => a + 1;

// create syntax for an arrow function 
// with no arguments, no curly braces, and no return statement
const addRandom = () => 1 + 1;



// display the variable on the console
console.log(name)
console.log(age)
console.log(hasHobbies)
console.log(summarizeUser(name, age, hasHobbies))
console.log(add(1, 2))
console.log(addOne(1))
console.log(addRandom())