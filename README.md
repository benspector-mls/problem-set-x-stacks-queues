# Problem Set: Stacks and Queues

## Directions
Respond to short response questions in clear, concise sentences directly within this file. Use markdown to ensure that your answers are formatted correctly.

Complete code challenges in `exercises.js`. 

Use Test Driven Development to guide you. For JavaScript, run `npm install` to download dependencies. Run `npm test` to run tests locally. Ensure all tests are passing before submitting this problem set.

### Short Response Questions
1. What is a stack? (_Be sure to use the term **LIFO** in your response._)

* A stack is an abstract data type that can hold many elements.
* Stacks implement two methods: `push` (adds a value) and `pop` (removes a value). 
* Stacks operate in a **last-in-first-out (LIFO)** model meaning the item in the stack that was most recently added to the stack is the first to be removed by the `pop` method.

2. What is a queue? (_Be sure to use the term **FIFO** in your response._)

* A queue is an abstract data type that can hold many elements.
* Queues implement two methods: `enqueue` (adds a value) and `dequeue` (removes a value). 
* Queues operate in a **first-in-first-out (FIFO)** model meaning the item in the queue that has been in the queue the longest (the first one in) is the first to be removed by the `dequeue` method.

### Coding Exercises

1. Implement a Stack.

2. Implement a Queue.

**Use a Stack to solve the following three problems in linear runtime.**

3. Write a function, `is_balanced_parentheses`, that returns a boolean value based on whether a string has balanced parentheses. Parentheses are balanced if: **(1)** Every open parenthesis has a corresponding closing parenthesis and **(2)** every pair of parentheses begins with an opening parenthesis.

4. Write a function, `is_palindrome`, that takes a string input and determines if the input is a palindrome.

5. Write a function, `decimal_to_binary`, that takes an integer input and returns its binary representation as a string of digits.
