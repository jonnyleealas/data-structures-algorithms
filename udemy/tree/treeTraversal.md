# Tree Traversal
- Breadth-first Search --> Working across the tree on the same level
- Depth-first Search --> 3 types --> Going down and then going back up

# BFS
- Going across the tree level per level
- Uses a queue --> first in first out --> push or shift(remove from the end)
- The queue helps the program remember which node to visit next. 

# Code
- Create a queue(can be an array) and variable to store the values of the nodes visited.
- Place the root node in the queue.
- Loop as long as there is anything in the queue.
    - Dequeue a node form the queue and push the value of the nod into the variable that stores the nodes.
    - If there is a left property on the node dequeue- ad dit to the queue.
    - If there is a right property on the queue add it to the queue.
- Return the variable that stores the values.
```
bfs(){
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);
    while(queue.length){
        let node = queue.shift();
        data.push(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return data
}

```
# Summary Breadth First Search
- Always uses a queue array
- Breadth first search goes through each node in a tree across each level. Starting at the root it check if it has a left, if yes it pushes it in to a queue. Then checks if there is a right, and pushes the node into the queue. 
- Binding this.root, data array, queue array.
- push root into queue
- while queue has a length 
    - pop first thing and push into data array
    - if there is a left push left into queue
    - if there is a right push right into queue
    - return data array.