# Linked List
- Elements don't have indeces
- They have pointers to the next element
- Each element is a node
    - nodes store data and reference the next node
    - Head is the beginning 
    - Tail is the end --> null
    - We keep track of length
- Random access is not allowed, in order to find something we have to check each node till we find our element.
- Great for insertion and deletion

# Singly Linked List
- Only point to the next node in front.
- Linked list will usually have a node head, tail, length, next in their constructor
# Code
- The trick to this is to loop while current.next or rather while current is pointing to something. When it points to null or rather points to nothing we can stop the loop. 
  - While we are looping we save the current position.
  - once its saved we go to the next node.
  - We save the current position and go to the next node.
  - The reason we do this is that at the end of the loop we will have saved the node right before the last node. And thats the trick. If we can save in memory the node before the last node, we simply assign the tail to be the node we saved, then tell the node we saved to point to null. That will then cut off the pointer to our previous tail and viola we've deleted the last node.


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
}


let l = new LL()
l.push("sarah")
l.push("samson")
l.push("jack")
l.push("henry")
l.unshift("jackson")
l.unshift("barry allen")
l.set(2, "300")





```

# insert
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
}


let l = new LL()
l.push("sarah")
l.push("samson")
l.push("jack")
l.push("henry")


l.insert("2", 1)
console.log(l)


```
# Light Bulb
- The reason the instance methods can read this.head and this.tail without taking any values is because they will be used on other methods that are part of the same class. They have access to the the parent class constructor. They also have access to the node class because the function that adds a new new is using the node class. They are all intertwined. 
- The data structure can only use methods from its same class.
- If I want to make something the tail i can have the tail.next point to the newTail 
  - I then make tail = newTail
- To add a new tail we assign a new tail then have the new tails pointer to next point to null.