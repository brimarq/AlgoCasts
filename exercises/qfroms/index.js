// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stackIn = new Stack();
    this.stackOut = new Stack();
  }

  add(record) {
    this.stackIn.push(record);
  }

  remove() {
    while (this.stackIn.peek()) {
      this.stackOut.push(this.stackIn.pop());
    }
    const record = this.stackOut.pop();
    while (this.stackOut.peek()) {
      this.stackIn.push(this.stackOut.pop());
    }
    return record;
  }

  peek() {
    while (this.stackIn.peek()) {
      this.stackOut.push(this.stackIn.pop());
    }
    const record = this.stackOut.peek();
    while (this.stackOut.peek()) {
      this.stackIn.push(this.stackOut.pop());
    }
    return record;
  }
}

module.exports = Queue;
