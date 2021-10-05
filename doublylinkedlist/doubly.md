# Doubly Linked List
- Node has a pointer to value, next, and prev.
    - Think of it like arrows going forward and backwards
        - Those arrows point to the next node
            - The node can hold a value

# Doubly Class
```
let Node{
  constructor(val){
    this.val = val;
     this.next = null;
     this.prev = null;
  }
}

let doubley{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```