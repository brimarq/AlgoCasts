// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // let node = this.head;
    // while (node) {
    //   if (!node.next) return node;
    //   node = node.next;
    // }
    // return node;
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next ? this.head.next : null;
  }

  removeLast() {
    // no nodes?
    if (!this.head) return;
    // one node?
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prevNode = this.head;
    let node = this.head.next;

    while (node.next) {
      prevNode = node;
      node = node.next;
    }
    prevNode.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (!last) {
      // no nodes?
      this.head = new Node(data);
    } else {
      last.next = new Node(data);
    }
  }

  getAt(index) {
    let i = 0;
    let node = this.head;
    while (node) {
      if (i === index) return node;
      i++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    // no negative index
    if (index < 0) {
      throw new RangeError('Index must be a non-negative integer!');
    }

    // empty list
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prevNode = this.getAt(index - 1);
    // ensure these exist
    if (!prevNode || !prevNode.next) return;
    prevNode.next = prevNode.next.next;
  }

  insertAt(data, index) {
    // no negative index
    if (index < 0)
      throw new RangeError('Index must be a non-negative integer!');
    // empty list
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let prevNode = this.getAt(index - 1) || this.getLast();
    prevNode.next = new Node(data, prevNode.next);
  }

  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
