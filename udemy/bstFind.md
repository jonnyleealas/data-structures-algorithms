# Find

# Time Complexity 
- O(log n)
- O(1) Best Case
# BST Method Find Long Version
- Start at root
    - check if there is a root, if not - return false because there is nothing.
    - if there is a root, check if value is value we are looking for. If it is the value return true
    - if not the value check if value is less than or greater than value. 
    - if greater
        - check to see if there is a node to the right
            - if there is, move to that node and repeat steps
            - if there isn't then the value doesn't exist and we are done. Return false
    - if less than
        - check if there is a node to the left
            - if there is, move to the left and repeat steps
            - if not we are done. Return false

```
  find(value){
    if(this.root === null){
      return "undefined"
    } else {
      let current = this.root;
      while(true){
        if(value === current.v){
          return true, current.v
        } else if(value < current.v){
          if(current.left === null){
            return false
          } else {
            current = current.left
          }
        } else if(value > current.v){
          if(current.right === null){
            return false
          } else {
            current = current.right
          }
        }
      }
    }
  }
```





# Summary Find Method Long Version
- Check if this.root is null, if it is null return false and we are done.
- Now we have to search the bst to see if the value exists
- Create a binding for current = this.root
- While loop to go through bst and check some conditions
- if the current.val === val we can return true
    - else if val < current.val 
    - if current.left === null return false
    - else current = current.left
    - else if(val > current.val)
    - if current.right === null return false
    - else current = current.right


# Find Method Simple

```
find(value){
   
    if(this.root === null) return false
     let current = this.root;
     let found = false;

     while(current && !found){
       if(value < current.v){
         current = current.left
       } else if(value > current.v){
         current = current.right
       } else {
         found = true
       }
     }
     if(!found) return "undefined"
     return current
  }

```

# Summary Find Method Short Version
- We check if this.root is null
- We create a binding for our current position --> current = this.root
- This version is less code due to the found variable we create and set to false.
- We set a conditional that sets it to true.
- If it is never set to true we never found our value and return false.