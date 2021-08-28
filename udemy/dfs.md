# Depth First Search
- Search down till we hit the end of the tree.
- For any traversal we need to visit node, add to list, explore the entire left and entire right side.
- When we change the order in which we visit it will change the output. 

# DFS Pre-Order
- Visit node then left then right.
- Visit node first then explore left side, then explore right side.
- array for visited
- binding for current = this.root
- Helper function that accepts a node
    - push node into visited array
    - if node has left call helper function on left
    - if node has right call helper on right
    - invoke the helper function with current
    - return array of visited.


# Pre-Order Code
```
pre-order(){
    let data = [];
    let current = this.root;

    function traversal(node){
        data.push(node.value);
        if(node.left) traversal(node.left);
        if(node.right) traversal(node.right);
    }

    traversal(current);
    return data;
}
```

# Summary DFS Pre-Order
- We push our root node.value before we visit its left and right children.
- Visit node first
- Search entire left side then entire right side of each node.
- We do this with a helper function recursively.
- We then instantiate the function and return our data array.

# DFS Post-Order
- We visit root node last.
- We visit the children left and right before pushing the parent node.

# Post-Order Code
```
postOrder(){
   let data = []
   let current = this.root
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value)
    }

    traverse(current);
    return data;
}
```

# Summary Post-Order
- Similar to DFS pre-order except we push the root value after we have visited the left and right children.

# DFS In-Order
- Ascending from low to high according to value.
- Go to current node
    - does it have a left, if yes call helper function with node.left if not push current node
    - does it have a right, if yes call helper function with node.right if not go to previous recursive call.
- It will check left side, once it checks left it pushes node.value into data array, then it proceeds to call recursion on node.right. 

# Code DFS In-Order
- Binder for data array
- Binder for this.root so we can update current node we are on.
- Helper function that takes a node
    - if left helper(node.left)
    - data.push(node.value)
    - if right helper(node.right)
- Call helper(current)
- return data array

```
dfsIn-Order(){
    let data = [];
    let current = this.root;

    function traversal(node){
        if(node.left) recursive(node.left);
        data.push(node.value);
        if(node.right) traversal(node.right);
    }

    traversal(current);
    return data;
}
```

# Summary DFS Post-Order
- Check if there is a left
- Push node.value
- Check if there is a right.