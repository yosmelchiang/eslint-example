function myFunction () {  
  return 'Hello, World!';
}

const myArr = [1, 2, 3];
const [ first ] = myArr

console.log(myFunction());

const myObject = {
  name: 'John',
  age: 30
};

const newObject = { ... myObject, name: 'Harry'};  // "prefer-object-spread" rule will be violated

console.log(myObject);
console.log('newObject:', newObject);

const func = function() { // "prefer-arrow-callback" will be violated
  console.log('This is a regular function');
};

func();

const someVariable = 5; 

console.log(someVariable);