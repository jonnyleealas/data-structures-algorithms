# Linked Lists
- There is a thing/Node
    - The node will have a value and a pointer to next
        - Value -> number or string
        - Next Pointer -> points to the next node or to null
- We assign property according to the  properties in our constructor. 
    - If our constructor has a head, we can assign a head because it is in the constructor
    - When we use a node we can also assign the properties in its constructor.

# Push
- Push usually adds to the end of a data structure. 
    - To add to the end in a Linked List all we have to do is assign the tail's pointer to our newNode and the assign the tail to be our newNode.
        - We do this so we don't accidentelty lose our previous tail in memory when we add our newNode to the end of the list.
        - We first have to take our current tail's next pointer and assign it to something, then take our new something and assign that as our new tail.

# Code
```
let obj = {
  key1 : "sand",
  key2 : "dirt",
  ky3 : "mud",
}

for(let key in obj){
  console.log(obj[key])
}

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
// put something at the end of a list
  push(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
  }

  unshift(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
}

let l = new LL()
l.push("sarah")
l.push("samson")
l.push("jack")
l.push("henry")
l.unshift("jackson")
l.unshift("barry allen")
console.log(l)
```