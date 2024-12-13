// main function which uses to perform operations

const add = (a,b) => a+b;
const substract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => (b != 0 ? a/b : 'Error: Division by zero');

module.exports = {add,substract,multiply,divide}

// console.log(add(5,6))