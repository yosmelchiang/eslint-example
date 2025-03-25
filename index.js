function myFunction() {
  return 'Hello, World!';
}

console.log(myFunction());

const myObject = {
  name: 'John',
  age: 30
};

const newObject = { ...myObject, name: 'Harry' };

console.log(myObject);
console.log('newObject:', newObject);

const func = function () {
  // "prefer-arrow-callback" will be violated
  console.log('This is a regular function');
};

func();

const someVariable = 5;

console.log(someVariable);
