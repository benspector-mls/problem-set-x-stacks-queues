// Question 1
class Stack {
  constructor() {
    this.values = [];
  }

  push(value) {
    this.values.push(value);
    return this.values.length;
  }

  pop() {
    return this.values.pop();
  }
  peek() {
    return this.values[this.values.length-1];
  }
  isEmpty() {
    return this.values.length === 0;
  }
  printStack() {
    return this.values.join(", ");
  }
  size() {
    return this.values.length;
  }
}

// Question 2
class Queue {
  constructor() {
    this.values = [];
  }
  enqueue(value) {
    return this.values.unshift(value);
  }
  dequeue() {
    return this.values.pop();
  }
  isEmpty() {
    return this.values.length === 0;
  }
  size() {
    return this.values.length;
  }
}

// Question 3
const isBalancedParentheses = (inputString) => {
  const parens = new Stack();
  for (char of inputString) {
    if (char === "(") {
      parens.push(char);
    }
    else if (char === ")") {
      if (parens.isEmpty()) {
        return false;
      }
      parens.pop();
    }
  }
  return parens.isEmpty();
};

// Question 4
const isPalindrome = (inputString) => {
  let chars = new Stack();
  for (let i = 0; i < inputString.length; i++) {
    if (i < Math.floor(inputString.length / 2)) {
      chars.push(inputString[i])
    }
    else if (i >= inputString.length / 2) {
      if (chars.pop() !== inputString[i]) {
        return false;
      }
    }
  }
  return true;
};

// Question 5
const decimalToBinary = (num) => {
  const stack = new Stack();
  let str = "";
  
  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }

  while (!stack.isEmpty()) {
    str += stack.pop();
  }

  return str;

  /* This seems like the same solution but
  we just remove the stack?
  let str = "";
  while (num > 0) {
    str = (num % 2) + str;
    num = Math.floor(num / 2);
  }
  return str;
  */

  
};

// input: 7 ==> output: 111

// 0 > 0
// 1 > 1
// 2 > 10
// 3 > 11
// 4 > 100
// 5 > 101
// 6 > 110
// 7 > 111

module.exports = {
  Stack, Queue, isBalancedParentheses, isPalindrome, decimalToBinary
}
