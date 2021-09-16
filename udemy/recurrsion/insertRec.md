# Insert Recursion
```
let tree = {
  value: 5,
  children: [
    {
      value: 3,
      children: [],
    },
    {
      value: 7,
      children: [],
    }
  ]
};

function insert(node, value) {
  if (value >= node.value) {
    if (node.children[1]) { // if right child exists, recurse with right child
      insert(node.children[1], value);
      return node;
    } else { // if right child doesn't exist, add it
      node.children.push({value: value, children: []});
      return node;
    }
  } else if (value < node.value) {
    if (node.children[0]) {
      insert(node.children[0], value);
      return node;
    } else {
      node.children.push({value: value, children: []});
      return node;
    }
  }
}

console.log(JSON.stringify(tree, null, 2));
let newTree = insert(tree, 1);
console.log(JSON.stringify(newTree, null, 2));
```

# Summary 
- Create an object with two indexes, 1 for left, 1 for right.
- Keys in object are value, Children array
- We push objects with the value when the node is null.
- We are pushing an object with the value as the key and into the children array.
- The first thing in the object is the root, the next things are the left and right nodes. Since the left and right nodes are in an array, the left is index 0 and the right is index 1