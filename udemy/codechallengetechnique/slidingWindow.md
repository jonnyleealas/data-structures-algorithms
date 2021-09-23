# Sliding Window Approach
- Use when keeping track of a subset of data in a larger set of data.
- Input doesn't have to be sorted.
- If its empty it should return null.
- First check should be if the number we are looking for is > than the length of array; we should return false.
    - If the number we are looking for is greater than the length of the array it tells us that our array is too short, meaning the number cannot possibly be in our array.

# Code maxSubArraySum
- We take a sub array and save in a temp variable while also saving max sum to keep track of highest number sofar.
- Next we go to the next index to check but we subtract the previous i position and then add current i position.
    - This will look like this
    ```
    tempSum = tempSum - arr[i - num] + arr[i]
        this takes tempSum --> subtracts the previous i index and adds the new i index.
        [1,2,3,4,5,6,7] --> so if the first subset is 1,2,3 --> the next subset will be 1,2,3,4 --> subtract 1 --> add 4 --> the next subset will be 2,3,4 --> next we take 2,3,4,5, --> subtract 2 --> add 5 --> this subset will be 3,4,5
    ```

# Code 2
```
let array = [1,2,2,4,5,6,2,2]
/**
 find the max sum of a sub array of a larger array. 
 input is an array and a number the indicates the size of the sub array we are counting.

 we need to create a function maxSubArraySum
 binding for maxSum to keep track of highest sum
 binding for tempSum to keep track of current sum
 edge case return null if num is larger than array.length
 create our first maxSum by running a loop on the first subset
 set tempSum = maxSum
 loop through index starting at the number after the subset by setting starting position to num
 next we subtract our previous i from our subset and add our new i
  temp = temp - arr[i - m] + arr[i]
next we check if we need to update our maxSum
    if(tempSum > maxSum){
      maxSum = tempSum
    }
  next we exit our loop and return maxSum

 */
let maxSubArraySum = (a, num)=>{
  let maxSum = 0, tempSum =0;

  if(num > a.length) return null;
  

  for(let i = 0; i < num; i++){
    maxSum += a[i]
  }

  tempSum = maxSum

  for(let i = num; i < a.length; i++){
    previousIndex = a[i - num]
    currentIndex = a[i]
    tempSum = tempSum - previousIndex + currentIndex
    console.log(maxSum, tempSum)
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

console.log(maxSubArraySum(array, 3))
```

# Summary
- Use when we need to keep track of a sub set of data
- We create a window that are n indexes apart and slide it the the next index while we add up sums.
- We subtract index 0 and add our current index.
- We compare maxNum and tempNum; we update to the largest sum
- Basically we create pointers n spaces apart to check the sum of a subset of elements n indexes apart. We create a window n indexes apart and slide it along the array while we sum the subset of elements.

## Linear search
- Go through each element in a data structure and see if an element exists.
```
let values = [1,2,3,4,5]

let findIndexOfValue = (a, value)=>{
  
  for(let i=0; i < a.length; i++){
    if(a[i] == value){

      return i
      
    } 
  }
return -1
}

console.log(findIndexOfValue(values,3))
```