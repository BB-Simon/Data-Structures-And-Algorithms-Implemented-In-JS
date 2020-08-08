class Queue {
  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  enqueue(element) {
    this.collection.push(element);
  }

  deueue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  is_empty() {
    return this.collection.length === 0;
  }
}

// let my_queue = new Queue()
// my_queue.enqueue("A")
// my_queue.enqueue("B")
// my_queue.enqueue("C")
// my_queue.print()
// console.log(my_queue.front());
// console.log(my_queue.size());
// console.log(my_queue.is_empty());
// my_queue.deueue()
// my_queue.print();

class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  enueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          //checking priorities
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  deueue() {
    let value = this.collection.shift();
    return value[0];
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

let priority_queue = new PriorityQueue();
priority_queue.enueue(["Takmina", 3]);
priority_queue.enueue(["Jimon", 2]);
priority_queue.enueue(["Simon", 1]);
priority_queue.enueue(["Souvo", 2]);
priority_queue.print();
priority_queue.deueue()
priority_queue.print()
