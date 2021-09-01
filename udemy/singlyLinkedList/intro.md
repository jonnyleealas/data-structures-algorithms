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

# Code
- create class node takes value and pointer to next
- create class singlyLinkedList that doesn't take value but saves length, head, tail

# Light Bulb
- The reason the instance methods can read this.head and this.tail without taking any values is because they will be used on other methods that are part of the same class. They have access to the the parent class constructor. They also have access to the node class because the function that adds a new new is using the node class. They are all intertwined. 
- The data structure can only use methods from its same class.
- If I want to make something the tail i can have the tail.next point to the newTail 
  - I then make tail = newTail
```

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Singly{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value){
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

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
}
let ll = new Singly();
ll.push("five")
ll.push("six")
ll.pop();
ll.pop()
console.log(ll)


```