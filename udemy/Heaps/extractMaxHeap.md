# Extract Max Heap
- Removing Max element
- Bubble Down, trickle down, sink down
- We put an element at the root that shouldn't be there then we bubble down till it gets to the correct position.
    - Swap compares the parent to its children and check to see if the parent is larger.
    - If any child is larger we replace the correct child to its parent.
    - Last we return the max element we popped in the beginning 
# Code
```
removeMax(){
      let max = this.values[0];
      let end = this.values.pop();
      if(this.values.length > 0){
          this.values[0] = end;
          this.bubbleDown();
      }
      
      return max
    }

    bubbleDown(){
      let idx = 0
      let length = this.values.length;
      let element = this.values[0];

      while(true){
        let leftIdx = 2 * idx + 1;
        let rightIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;
        // We have no make sure the the leftChild is in bounds --> not over the length of the array
        if(leftIdx < length){
        // If the index position is less than the length of array we can set the leftChildValue to the leftIndex position.
          leftChild = this.values[leftIdx];
          if(leftChild > element){
            swap = leftIdx;
          }
        }
        if(rightIdx < length){
          rightChild = this.values[rightIdx];
          // We have to check if we have swapped the correct child. Right can be larger than left and left can be larger than right. This makes sure we are swapping correctly.
          // if swap hasnt been set and rightChild is larger than element or 
          // if something has been swapped and rightChild is larger than left child
          if(
            (swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)
          ){
             swap = rightIdx;
          }
        }
        if(swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        // The idx needs to be updated. Say we swap elements. We then need to go to the lower numbers index and check its children to make sure we swapped to the correct position.
        idx = swap;
      }

    }
```


# Summary extractMaxHeap
- We need to remove the largest element in a heap and then order the heap to send the new largest element to the top.
- pop() the index 0
- We take the last element in the heap and put it in index 0
- Use a bubble down method to swap element till all element are in the correct place.
- We are using swap to save the index of the left or right child based on conditionals.

# Notes 
- Any function that doesn't take an input can use global variables from the outside.
- We sometimes keep track of index, index value, array length, leftChild, rightChild, parent, etc.
