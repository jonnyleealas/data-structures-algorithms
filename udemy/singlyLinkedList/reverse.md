# Reversing a linked list in place
```
reverse(){
  let node = this.head;
  this.head = this.tail;
  this.tail = node;
  let next;
  let prev = null;

  for(let i = 0; i < this.length; i++){
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this;
}

```
# Explanation 
- We this.head = this.tail will leave the value of the head but change what its called.
- this.tail = node will set the tail to be the head. The linked list values stay the same but the definers of head and tail have changed.
- we are just changing the pointers of each node to be the previous node.

# Learns
- The tricky part for me was understanding why flipping head and tail didn't flip the values. What seems to be happening is that the head and the tail are reversed but the values stay in place.
- We aren't actually reversing value, what we are reversing is simply the head and the tail. So if the value of head was 1 and the value of tail was; tail is now 1 and head is now five, but the order of the values in the linked list remain the same at this point. 
- In This case we are having the nodes point to its previous node. Thats why its called reverse in place. Nothing actually moves except for their pointers.
- At each step we need to update where we are currently. 




# Code
```


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

reverse(){
  let node = this.head;
  this.head = this.tail;
  this.tail = node;
  let next;
  let prev = null;

  for(let i = 0; i < this.length; i++){
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this;
}

print(){
  let arr = [];
  let current = this.head;
  while(current){
    arr.push(current.val)
    current = current.next;
  }
  console.log(arr);
}

}


let l = new LL()
l.push("sarah 1")
l.push("samson 2")
l.push("jack 3")
l.push("henry 4")
l.reverse()
l.print()
// console.log(l)
```