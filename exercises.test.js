const { Stack, Queue, Deque, isBalancedParentheses, isPalindrome, decimalToBinary } =  require('./exercises.js');

describe('Stack', () => {
  it('is empty by default', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('can add items', () => {
    const stack = new Stack();
    stack.push('a');
    expect(stack.isEmpty()).toEqual(false);
  });

  it('can remove items', () => {
    const stack = new Stack();
    stack.push('a');
    expect(stack.pop()).toEqual('a');
    expect(stack.isEmpty()).toEqual(true);
  });

  it('can hold mulitiple items', () => {
    const stack = new Stack();
    stack.push('b');
    stack.push('c');
    expect(stack.size()).toEqual(2);
  });

  it('can preview the next item', () => {
    const stack = new Stack();
    stack.push('b');
    stack.push('c');
    expect(stack.peek()).toEqual('c');
  });
});

describe('Queue', () => {
  it('is empty by default', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it('can add items', () => {
    const queue = new Queue();
    queue.enqueue('1st');
    expect(queue.isEmpty()).toEqual(false);
  });

  it('can add multiple items', () => {
    const queue = new Queue();
    queue.enqueue('1st');
    queue.enqueue('2nd');
    queue.enqueue('3rd');
    expect(queue.size()).toEqual(3);
  });

  it('can remove items', () => {
    const queue = new Queue();
    queue.enqueue('1st');
    queue.enqueue('2nd');
    queue.enqueue('3rd');
    expect(queue.dequeue()).toEqual('1st');
    expect(queue.size()).toEqual(2);
  });
});

describe('Deque', () => {
  it('is empty by default', () => {
    const deque = new Deque();
    expect(deque.isEmpty()).toEqual(true);
  });

  it('can add to the rear and front', () => {
    const deque = new Deque();
    deque.addRear(4);
    deque.addRear('Dog');
    deque.addFront('Cat');
    deque.addFront(true);
    expect(deque.size()).toEqual(4);
    expect(deque.isEmpty()).toEqual(false);
    deque.addRear(8.4);
    expect(deque.removeRear()).toEqual(8.4);
    expect(deque.removeFront()).toEqual(true);
  });
});

describe('isBalancedParentheses', () => {
  it('can determine parentheses balance', () => {
    expect(isBalancedParentheses('()()')).toEqual(true);
    expect(isBalancedParentheses('()((')).toEqual(false);
    expect(isBalancedParentheses('()(()))')).toEqual(false);
    expect(isBalancedParentheses('((()))()')).toEqual(true);
    expect(isBalancedParentheses(')()(')).toEqual(false);
  })
});

describe('isPalindrome', () => {
  it('can determine if a string is a palindrome', () => {
    expect(isPalindrome('abba')).toEqual(true);
    expect(isPalindrome('racecar')).toEqual(true);
    expect(isPalindrome('palindrome')).toEqual(false);
    expect(isPalindrome('08052020')).toEqual(false);
    expect(isPalindrome('02022020')).toEqual(true);
  });
});

describe('decimalToBinary', () => {
    it('can convert decmials to binary', () => {
      expect(decimalToBinary(7)).toEqual('111');
      expect(decimalToBinary(42)).toEqual('101010');
      expect(decimalToBinary(225)).toEqual('11100001');
    });
});
