// let letters = []; // this the stack
// let word = "racecar";
// let reverseWord = [];

// put letters of worrd into stack
// for (let i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }

// // pop of the stack in reverse order
// for (let i = 0; i < word.length; i++) {
//   reverseWord += letters.pop();
// }

// if (reverseWord === word) {
//   console.log(`${word} is plaindrom`);
// } else {
//   console.log(`${word} is not plaindrom`);
// }

// Implementing stack with ES5 Syntex
// var Stack = function () {
//   this.count = 0;
//   this.storage = {};

//   // add a value to end of the stack
//   this.push = function (value) {
//     this.storage[this.count] = value;
//     this.count++;
//   };

//   // remove from end of the stack and return the value
//   this.pop = function () {
//     if (this.count === 0) {
//       return undefined;
//     }

//     this.count--;
//     var result = this.storage[this.count];
//     delete this.storage[this.count];
//     return result;
//   };

//   this.size = function () {
//     return this.count;
//   };

//   this.print = function () {
//     return this.storage;
//   };

//   this.peek = function () {
//     return this.storage[this.count - 1];
//   };
// };

// Implementing stack with ES6 Syntex
class Stack {
  constructor() {
    this.count = 0;
    this.storage = [];
  }

  // add a value to end of the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // remove from end of the stack and return the value
  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  print() {
    return this.storage;
  }

  peek() {
    return this.storage[this.count - 1];
  }
}

my_stack = new Stack();

my_stack.push("simon");
my_stack.push("jimon");
my_stack.push("takmina");
my_stack.push("souvo");
my_stack.push("jannat");

// console.log(my_stack.print());
// console.log(my_stack.size());
// console.log(my_stack.peek());
// console.log(my_stack.pop());
// console.log(my_stack.size());
// console.log(my_stack.peek());

// for (let i in my_stack.storage) {
//   console.log(`property: ${i} => value: ${my_stack.storage[i]}`);
// }

for (let i of my_stack.storage) {
  console.log(i);
}
console.log(my_stack.print());
