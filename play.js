const person = {
  name: 'Sandro',
  age: 39,

  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

// object destructuring
const printName = ({name}) => {
  console.log(name);
}

printName(person);

// variable destructuring
const {name, age} = person;
console.log(name, age);

// array destructuring
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);