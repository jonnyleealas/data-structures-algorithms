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
- The tails next = newNode
- NewNode is not the tail
```
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class singlyLinkedList{
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
        this.length ++
        return this;
    }
}

```