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
- The trick to this is to loop while current.next or rather while current is pointing to something. When it points to null or rather points to nothing we can stop the loop. 
  - While we are looping we save the current position.
  - once its saved we go to the next node.
  - We save the current position and go to the next node.
  - The reason we do this is that at the end of the loop we will have saved the node right before the last node. And thats the trick. If we can save in memory the node before the last node, we simply assign the tail to be the node we saved, then tell the node we saved to point to null. That will then cut off the pointer to our previous tail and viola we've deleted the last node.


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

# Light Bulb
- The reason the instance methods can read this.head and this.tail without taking any values is because they will be used on other methods that are part of the same class. They have access to the the parent class constructor. They also have access to the node class because the function that adds a new new is using the node class. They are all intertwined. 
- The data structure can only use methods from its same class.
- If I want to make something the tail i can have the tail.next point to the newTail 
  - I then make tail = newTail
- To add a new tail we assign a new tail then have the new tails pointer to next point to null.