# Binary Search Tree
- Has to be ordered.
- Any child of a parent lower are to the left and higher are to the right.
- Any node to the left of the parent is higher in value and any node to the right of the parent is lower in value than the parent.

# Time Complexity
- O(log n)
- O(1) best case

# Node Class
- classes need a constructor function to create our object template
- this.value = value
- this.left = null
- this.right = null

```
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null
    }
}
```

# BST class
- define class
- define constructor
- Give it a root that points to null
```
class BST{
    constructor(){
        this.root = null
    }
}
```

# Insert Method
- create a new Node(value)
- check to see if there is a node.
    if there isn't a node then this.root = newNode
    return this
- If there is a root node already there then we have to check if our value is less than or greater than our current value. We do this by saving our current value and traversing either the left or the right side depending on greater or less than.
- We can also add an if statement to check whether the newNode is already there. This will account for duplicate nodes. We can return undefined if the node already exists.
- We can use a while loop.
    - save current node
    - if the value is less than our currentNode.value we look to see if our currentNode has a left.
    - If its currentNode.left is pointing to null(meaning nothing is there) we can set currentNode.left to our newNode
    - else we set our currentNode to be the left node so that we can view the left side and restart our traversal on the left node.
        - else currentNode = currentNode.left
    - if the value is greater than the currentNode we have to go to the right.
    - Does currentNode have a right node?
        - If it doesn't have a currentNode.right then currentNode.right = newNode
        - Return this;
    - else we have to go to the right node and restart our search.
    - else currentNode = currentNode.right

# Insertion Time Complexity
- O(log n)
- O(1) Best Case
```
class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value);

    if(this.root === null){
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true){
        if(value < current.value){
          if(current.left === null){
            current.left = newNode;
            return this;
          } else {
            current = current.left
          } 
          } else if(value > current.value){
            if(current.right === null){
              current.right = newNode;
              return this;
            } else {
              current = current.right
            } 
        }
      }
    }
  }

  find(value){
    if(this.root === null) return "not found";
    let current = this.root;
    let found = false;
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right
      } else {
        found = true;
      }
    }
    if(!found)return "Node value not found";
    return current;
  }
   
  bfs(){
    let node = this.root, data = [], queue = [];
    queue.push(node)
    while(queue.length){
       let node = queue.shift()
      data.push(node.value)
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  return data
  }

  dfsPre(){
    let current = this.root;
    let data = [];
    function traversal(node){
      data.push(node.value);
      if(node.left)  traversal(node.left);
      if(node.right) traversal(node.right);
    }
    traversal(current);
    return current;
  }

  dfsPost(){
    let current = this.root, data = [];

    function traversal(node){
      if(node.left) traversal(node.left);
      if(node.right) traversal(node.right);
      data.push(node.value);
    }

    traversal(current);
    return data;
  }

  dfsOrder(){
    let current = this.root, data = [];

    function traversal(node){
      if(node.left) traversal(node.left);
      data.push(node.value);
      if(node.right) traversal(node.right);
    }

    traversal(current);
    return data;
  }
}

let bst = new BST()
bst.insert(4)
bst.insert(44)
bst.insert(24)
bst.insert(433)
bst.insert(1)

console.log(bst.dfsOrder())
```



# Summary BST
- Binary Search tree must be in order
- left of the root is less than and right of the root is greater
- Must create a class for node and a class for bst
- Also we make root and point it to null so that we have a base layout for new instances of the class. We need to give the bst class an empty root.
- Make sure that you are using the correct constructor properties.

# Summary Node Class
- We create a class with pointers to left, right, and value
- Node is basically an object that helps us organize our data. So in this case Node will have keys for value, right, and left.

## Notes
- if(!node) can be used instead of if(node === null)

