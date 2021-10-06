# Doubly Linked List
- Node has a pointer to value, next, and prev.
    - Think of it like arrows going forward and backwards
        - Those arrows point to the next node
            - The node can hold a value

# Doubly Class
```
class Node{
  constructor(val){
    this.val = val;
     this.next = null;
     this.prev = null;
  }
}

class Doubly{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let newNode = new Node(val);
    if(!this.head){
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
}
let nn = new Doubly()
nn.push(3)
nn.push(4)
nn.push(323)
nn.push(32)


console.log(nn)

```