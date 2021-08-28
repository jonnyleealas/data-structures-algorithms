# Max Binary Heap
- 2n + 1 to find the right node
- 2n + 2 to find the left node
- (n - 1) /2 to find its parent floored("take decimal off")

# Steps to Building a Binary Heap
- Insert --> push --> add to the end of an array
- Swap to find its parent
- Parent must always be bigger than child


# Code 
- Create a values array in our constructor
- create insert method that take an element.
- save our last index in a binding. This is the element we just pushed.
- save the value at that index
    - while index is > 0
    - Binding for the parent of our element
    - Binding for the value of our parent
        - if element value is <= parent value we can break
        - else make our parent index = our element value
        - make the value at our original index the parent value
        - update our index to our parent index
```
class MaxBinaryHeap{
  constructor(){
    this.values = [41,39,33, 18, 27, 12];
    
  }

  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp(){
 // gives us the index of our pushed value
    let idx = this.values.length - 1;
// element gives us the value of idx
    const element = this.values[idx];
    while(idx > 0){
// Gives the index of the value pushed
      let parentIdx = Math.floor((idx - 1)/2);
// Gives you the value at parentIdx
      let parent = this.values[parentIdx];
// if the element is <= to parent we are done child needs to be less than parent in MaxBHeap
      if(element <= parent)break;
// the value at our parentIdx is now the value of our element index
      this.values[parentIdx] = element;
// the value at our idx is now the value of our parents index
      this.values[idx] = parent;
//this updates our previous index to be our new
      idx = parentIdx;
      
    }
  }

}
let heap = new MaxBinaryHeap();


heap.insert(9)
console.log(heap)
heap.insert(8)
console.log(heap)
heap.insert(700)
console.log(heap)

```
# Code with comments
```
class MaxBinaryHeap{
  constructor(){
    this.values = [41,39,33, 18, 27, 12];
    
  }

  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp(){
    // bind the index position
    let idx = this.values.length - 1;
    // bind the index position's value
    const element = this.values[idx];
    // if the length is 6 then index will be 6 and the loop will loop while 6 is greater than 0.
    while(idx > 0){
      // we need to find the parent of the child so we subtract - 1 from the index and divide it by 2.
      let parentIdx = Math.floor((idx - 1)/2);
      // We take that parent index and look at the value
      let parent = this.values[parentIdx];
      if(element <= parent)break;
      // the array at the parent index value = the value at our old element
      this.values[parentIdx] = element;
      // the value at our original idx = our parent value
      this.values[idx] = parent;
      // our old index = our parent index
      idx = parentIdx;
      
    }
  }
}

let heap = new MaxBinaryHeap();


heap.insert(9)
console.log(heap)
heap.insert(8)
console.log(heap)
heap.insert(700)
console.log(heap)

```





# Summary 
- Max binary heap: Parent is always larger than child
- We insert at the end of an array
- We compare the value of the element we just pushed to its parent.
- We break if the element is less than parent
- We swap if element is > than parent
      - Check if value is < then parent; break
      - this.values[parent Index] = value of child --> this goes to the parent index and changes its value to the value we just pushed(child value)
      - this.value[child index] = value of parent --> this goes to the index of child and changes its value to the value of the parent --> this.values[parentIndex]
      - childIndex = parentsIndx --> this updates the current index in the array we are checking.