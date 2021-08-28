# Priority Queue
- Serves the highest priority element
# Time Complexity 
- O(log n);
- Great for insertion and deletion
# Code 
```

class PriorityQueue {
  constructor(){
    this.values = [];
  }

  enqueue(value, priority){
    let newNode = new Node(value, priority)
    this.values.push(newNode);
    this.bubble();
  }
    bubble(){
      let idx = this.values.length - 1;
      let idxValue = this.values[idx];

      while(idx > 0){
        let parent = Math.floor((idx - 1)/2)
        let parentValue = this.values[parent];
        if(idxValue.priority <= parentValue.priority)break;
        this.values[parent] = idxValue;
        this.values[idx] = parentValue;
        idx = parent;
      }
    }
    dequeue(){
      let max = this.values[0];
      let end = this.values.pop();
      if(this.values.length > 0){
        this.values[0] = end;
        this.bubbleDown();
      }
      return max;
    }

    bubbleDown(){
      let idx = 0, 
          length = this.values.length, 
          parent = this.values[0];

      while(true){
        let leftChildIdx = 2 * idx + 1,
            rightChildIdx = 2 * idx + 2, 
            leftChildVal, 
            rightChildVal, 
            swap = null;
        if(leftChildIdx < length){
          leftChildVal = this.values[leftChildIdx];
          if(leftChildVal.priority > parent.priority){
            swap = leftChildIdx;
          }
        }
        if(rightChildIdx < length){
          rightChildVal = this.values[rightChildIdx];
        if(
            (swap === null && rightChildVal.priority > parent.priority)||
            (swap !== null && rightChildVal.priority > leftChildVal.priority)
          ){
           swap = leftChildIdx;
         }
        }
        if(swap === null)break;
          this.values[idx] = this.values[swap];
          this.values[swap] = parent;
          idx = swap
            console.log("bitch",idx)   
      }
    }
  }

  class Node{
    constructor(value, priority){
      this.value = value;
      this.priority = priority;
    }
  }

  let ER = new PriorityQueue();
  ER.enqueue("cold", 1);
  ER.enqueue("fever", 5);
  ER.enqueue("gunshot",5)

  console.log(ER.dequeue())
  ```
# Summary
- Its similar to a regular heap insert method except it has an added element called priority. 
- Also we need to create a node that takes a value and a priority.

# Notes
- When checking left child I must remember to set a conditional to check whether rightChild is < than length. If if is we can compare the rest.