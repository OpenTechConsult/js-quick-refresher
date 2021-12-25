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
function summarizeUser(userName, userAge, userHasHobbies) {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies
}



// display the variable on the console
console.log(name)
console.log(age)
console.log(hasHobbies)
console.log(summarizeUser(name, age, hasHobbies))