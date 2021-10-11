# Doubly Linked List
- Node has a pointer to value, next, and prev.
    - Think of it like arrows going forward and backwards
        - Those arrows point to the next node
            - The node can hold a value

# Get
- The trick here is to find out which end to start from. We can start from the start or the end.
- If the index is greater than the middle we start at the end and work our way down.
- if the index is less than the middle of the list we start from the beginning and work our way up.
- if there is no head  
  - return null 
- We can create binding for current and count which we can update in our next if statements.
- if index is < 0 or index is > than 0 or index is equal to 0 return null.
  - the highest index in an array or linked list will always be length - 1. If index is 10 and length is 10 we have to go back one spot to index 9. There is nothing at index 10.
- if index is less than or equal to length/2
  - while count != index
    - count = 0
    - start at head
    - head = head.next
    - count++
      (once index is no longer less than or equal to length we can return )
  - else start at tail and work our way back
    - count = this.length - 1
    - start at tail
    - while count != index
      - tail = tail.prev
      - count--
      (once count is equal to index we can return)

      # Set
      - Replacing a value in a node 
  - must be careful  to set variables outside of loops.
# Set
- Takes an index and replaces the node value of that index in a list.
- Use our get method with our index passed in and set it as a variable.
  - Use the returned value to find the index of our list and replace the value in that index with our newValue

  # Insert
  - add a node and value according to index input
  - we can use our get method to insert a value 

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
    if (this.laength === 0) {
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
    let count, current;
    if(index <= this.length/2){
        count = 0;
        current = this.head;
        while(count != index){
          current = current.next;
          count++;
        }
        return current;
      } else {
        count = this.length - 1;
        current = this.tail;
        while(index != count){
          current = count.prev;
          count--;
        }
        return current;
      }
  }

  set(index, newValue){
    let replace = this.get(index);
    if(replace != null){
      replace.val = newValue;
      return true
    }
    return false;
  }

  insert(index, newVal){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return this.unShift(newVal);
    if(index === this.length) return this.push(newVal);
    let newNode = new Node(newVal)
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++
    return true;

  }

}
let nn = new Doubly()
nn.push(3)
nn.push(4)
nn.push(323)
nn.set(0, "blast")

console.log(nn)
```