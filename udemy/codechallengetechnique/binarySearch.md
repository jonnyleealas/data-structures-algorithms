# Binary Search
- Eliminate half of the remaining elements at a time.
- Data must be sorted  
- Split data into left and right.
- If value we are looking for is greater then we search the right side.
- If value is lesser we search left side.

# Time complexity
- O(log base 2 of n) or 2 to what power gives us n?
- Simplified to O(log n)
- Every time we double our input we are only adding 1 extra step. 
- O(log n) is similar to linear O(1)

# Code Sample 1
```
function binaryS(a, n){
  let left = a[0];
  let right = a.length - 1;
  let mid = Math.floor((left + right) / 2);
  while(a[mid] !== n && left <= right){
 if(n < a[mid]){
      right = mid-1 
    } else {
      left = mid+1
    }
    mid = Math.floor((left + right) / 2)
  }
  if(a[mid] === n){
    return mid
  }
  return -1
  }

  console.log(binaryS(n,1))
  ```

# Code Sample 2 Refactored
- Create binding for start = 0, end = array.length - 1, and middle = Math.floor((start + end)/2) --> if there are an even number of elements in the array Math.floor will pick the lowest of the two middle numbers.
- We loop while the middle number is not the element and while index at start is lower or equal to index at end. This will help us avoid an infinite loop. The loop would otherwise keep trying to choose middle of start and end if start and end overlap due to not finding our element.
- After we have looped through our data we create another conditional to return our results.
- If the middle number is our element return mid.
- Else return -1 because the number we are searching for does not exist. 
```

function binary(array,  element){
  let start = 0, end = array.length - 1, mid = Math.floor((start + end)/2);

  while(element !== array[mid] && start <= end){
    if(element < array[mid]) end = mid - 1;
    else start = mid + 1;
    mid = Math.floor((start + end)/2);
  }
  return element === array[mid] ? mid : -1
}

```

# Summary
- The data must be sorted!!! Time O(log n) or best O(1)
- Binary search splits our data set in 3 parts. Start of array , end of array , and middle.
- We loop through our data.
- Loop while middle is not our element and also while start is less than end.
- If our element is less than middle change the end to position middle -1, else update start to position mid + 1. Each time we move our pointers we have to reset our middle.
- Next if our element is middle return middle, else not found return -1.

## Side not about index vs index value
- element is a value so if we are looking to compare values and we say mid, well mid is pointing to an index position not its value. To point at an index's value we have to say array[mid] --> in other words: choose the value of the array at index position mid --> mid = Math.floor((start + end )/ 2) which will give the index position at the middle of our array --> [1,2,3,4,5] mid = 3
- When comparing values we have to go find the index location and the find the value we are comparing --> So array[index] will give us the value that is held at the index position.