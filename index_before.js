// index.js

var myVariable = 10; // "no-var" rule will be violated

function myFunction () { 
  if (true) {
    return 'Hello, World!'; // "no-else-return" will be violated
  } else {
    return 'Goodbye!'; // "no-else-return" rule will be violated
  }
}

const myObject = {
  name: 'John',
  age: 30
};

myObject.name = 'Harry';  // "prefer-object-spread" rule will be violated

console.log(myObject);

const func = function() { // "prefer-arrow-callback" will be violated
  console.log("This is a regular function");
};

func();

let someVariable = 5;  // "prefer-const" will be violated
someVariable = 10;