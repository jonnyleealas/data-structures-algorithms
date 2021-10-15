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
  - The trick is to save the previous and next indexes of the index we are trying to insert. If we want to insert into index 2 then we have to save index 1 and save index 3 in variables. Then we can adjust 1 pointer to point to new index, and adjust index previous to point to 1. We have to do the same for indexes next pointer and the original next pointers previous.
  - First our null check. If index is less than 0 or greater than length return null. If our index is greater than length that means we would have to go passed the last thing in the array and also go passed its next index. This causes an issue because we would have empty spaces after the last index to make sure our new index is in the correct position. This would cause a waste of space.
  - We have to check length first. We want our function to return null as quickly as possible if the list is empty. If it isn't empty it won't return null and we now know there is at least one thing in the list.
  - if index is 0 we can use unshift to add to the front. The reason we do this is we have to move each index in the list to so that index 0 is empty; then we can add our new index in the now empty index.
  - if index is the length of the list we can use push to add to the end. If the length is 5 that means there are 4 things in our list, because the last thing in the list is always length - 1. If the index we want to add to is the same as length that perfectly fine. What we have to do is go the the end of the list and add our new index there. In this case we can simply push. When the number of things in a list is 4 and we push on to the end, our index will end up being index 5 of the list. Now our Length has changed from 5 to 6. 

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

insert(index, value){
  if(index < 0 || index > this.length) return undefined;
  if(index === 0){
    return this.unShift(value)
  }
  if(index === this.length){
    return this.push(value)
  }
  let newNode = new Node(value);
  let before = this.get(index - 1);
  let after = before.next;
  before.next = newNode;
  newNode.prev = before;
  newNode.next = after;
  after.prev = newNode;
  this.length++
  return this;
}

}
let nn = new Doubly()
nn.push(3)
nn.push(4)
nn.push(323)
nn.insert(56, "bulls on parade")
```