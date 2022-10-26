const sayHello = function (name) {
  console.log(`Hello ${name}!`)
}

sayHello("Bob");

//Console.log
const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

//Return
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');

// Variable that calls a function
const returnSayHello  = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('John');

console.log(greeting);

