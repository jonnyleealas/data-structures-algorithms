# Doubly Linked List
- Node has a pointer to value, next, and prev.
    - Think of it like arrows going forward and backwards
        - Those arrows point to the next node
            - The node can hold a value

# Doubly Class
```
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class Doubly {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;

    }
    this.length++
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let oldTail = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;

  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      this.length--;
      return oldHead;
    }
  }

  unShift(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++
    return this;
  }

  get(index){
    if(index < 0 || index >= this.length){
      return null;
    }
    if(index <= this.length/2){
      console.log("start")
      while(count != index){
        let count = 0;
    let current = this.head
      current = current.next;
      count++;
    }
    return current;
    } else {
      console.log("end")
      let count = this.length - 1;
      let current = this.tail;
      while(count != index){
        current = current.prev;
        count--
      }
      
    }
    return current;
    
  }

}
let nn = new Doubly()
nn.push(3)
nn.push(4)
nn.push(323)
nn.get(2)
console.log(nn.get(2))
```