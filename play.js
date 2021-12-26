const person = {
  name: 'Sandro',
  age: 39,

  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

copiedPerson = {...person};
console.log(copiedPerson);


const hobbies = ['Sports', 'Cooking'];
// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map( hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

const copiedArray = [...hobbies]
console.log(copiedArray);

const toArray = (...args) => {
  return args
}
console.log(toArray(1, 2, 3, 4));