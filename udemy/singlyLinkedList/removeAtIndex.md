# Remove method at a given index
- Given an index remove the node in the linked list at that index.

# Pseudo 
- if index is less than 0 or greater than length return undefined
- if index is 0 remove head
- if index is the last node in the list remove last node
- use get method to find the index - 1
    - this gives us the node 1 index before the index we want to remove.
- have our previous nodes next pointer point to the index nodes next node. this will delete the node in the middle of previous and index.next
- decrement length
- return index removed
# Code
```
// let obj = {
//   key1: "sand",
//   key2: "dirt",
//   ky3: "mud",
// }

// for (let key in obj) {
//   console.log(obj[key])
// }

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  // put something at the end of a list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;

    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length++

  }
// put in front of list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      

    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++
    return this;
  }
// insert after head
  insertAfter(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++

    } else {
      newNode.next = this.head.next;
      this.head.next = newNode;
      this.length++

    }
  }
// delete head
  shift() {
    if (!this.head) return undefined
    let head = this.head;
    this.head = head.next;
    this.length--;
    return head.val;
  }

// delete tail
pop(){
  if(!this.head) return undefined;
  let current = this.head;
  let newTail = current;
  while(current.next){
    newTail = current;
    current = current.next;
  }
this.tail = newTail;
this.tail.next = null;
this.length--;
if(this.length === 0){
  this.head = null;
  this.tail = null;
}
return current;
}
// goes to the index given and returns the value
get(index){
  if(index < 0 || index >= this.length)return null;
  let current = this.head;
  let counter = 0;
  
  while(counter !== index){
    current = current.next;
    counter++
  }
return current
}

listLength(){
  return this.length;
}
// sets value of node according to index and value
set(index, val){
 let found = this.get(index);
  if(found){
    found.val = val;
    return {found: true, value: val};
  }
  return true;
}
// my version without temp variable
insert(val, index){
  
  if(index < 0 || index > this.length) return false;
  if(index === this.length)return this.push(val);
  if(index === 0)return this.unshift(val);
  
    let newNode = new Node(val);
    let prev = this.get(index - 1)
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++
    return true
}

// udemy version with temp
insert2(val){
  if(index < 0 || index > this.length) return false;
  if(index === this.length){
    this.push(val)
    return true;
  }
  if(index === 0){
    this.unshift(val);
    return true
  }
  let newNode = new Node(val);
  let prev = get(index - 1);
  let temp = prev.next;
  prev.next = newNode;
  newNode.next = temp;
  length++
  return true;
}

remove(index){
  // if the number is negative or greater than length
  if(index < 0 || index >= this.length){
    return null;
  }
  // if its the first thing
  if(index === 0 ) return this.shift()
  // if its the last thing
  if(index === this.length - 1) return this.pop();
  let current = this.get(index - 1);
  let removed = current.next
  current.next = current.next.next;
  this.length--
  return removed
}

}


let l = new LL()
l.push("sarah")
l.push("samson")
l.push("jack")
l.push("henry")


l.remove(3)
// console.log(l)

```