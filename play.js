const person = {
  name: 'Sandro',
  age: 39,

  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet();