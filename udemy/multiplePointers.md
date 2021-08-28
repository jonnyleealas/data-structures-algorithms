# Multiple Pointers
- Used when looking for pairs.
- We keep track of the start and the end of the array of elements.
- Move towards start, end, or middle.
- Used for arrays, linked list, doubly or singly.
- Both pointers/ variables move towards the middle of the list.
- Pointers are variables that point to a specific locations in a list or array.
- Data needs to be sorted.

 # Code Sample
 ```
 let arr = [-5,-4,-3,-2,-1, 0, 1,2,3,4,5,6,7,8,9]
/*
create a functions called find sum
create a pointer for start
create a pointer for end array.length -1
loop through array 
create a var for the summation of start and end
while is start is less than end
if sum is zero we return start and end of the array
if sum is greater than zero we move right pointer down
if sum is less than zero we move pointer up
*/ 

let findSum = (a)=>{
let start = 0, end = a.length -1;

while(start < end){
    let sum = a[start]+a[end]
    if(sum == 0){
        return { num1: a[start], num2:a[end]}
    } else if (sum > 0){
        end--
    }else{
    start++
    }
  }
}

console.log(findSum(arr))


```
# Summary start and end
- We can use a two pointer method to solve problems that are looking for two elements that make up a third element.
- One pointer at the start and one at the end of the list we are checking.
- At each iteration we make a check and move either the start pointer ++ or the end pointer --

# Multiple pointer unique values
- If we are looking for unique values we can use two pointers to check.
- first pointer starts at index 0 and the second at index 1
- We check to see if first is equal to second if they are not we move second up one.
- if the pointers are not equal we can move the starting pointer up one index and make the index equal to pointer two.
- we can then return the first index +1 to get our total unique values.


# Code example
```

let arr2 = [1]
/**
 * create function findUnique
 * create a counter 
 * variable for first
 * variable for second which start one index ahead of first
 * loop through arrayf
 * if first doesnt == second counter ++
 * if it does == second move both pointers up one
 */
let findUnique = (a)=>{
  if(a.length === 0) return 0
let i =0
for(let j = 1; j < a.length; j++){
  if(a[i]!== a[j]){
    i++
    a[i]=a[j]
  }
}
return i+1
}

console.log(findUnique(arr2))
```

# Summary Unique values
- We keep moving second pointer up one index till we find a value that doesn't match.
- Once we find a value where first and second don't match we move first up one index and set that index equal to the value of the position of second pointer.



### Multiple pointers find ave sum of pairs that match target value
- If our input is 0 or only has 1 element we can return false because we at least need 2 elements in the array.
- pointer for 0
- pointer for end of array
- while start is < end
- take the ave of right and left
  - if sum === target we are done and we can return true
  - if ave is < target move start ++
  - else move end--
  - If the loop finishes and nothing is found we can return false
```
let ave = [1,2,3,5,6]
function averagePair(array, target){
    if(array.length === 0 || array.length === 1) return false

        let right = 0
        let left = array.length - 1;
    
    while(right < left){
        let sum = (array[right] + array[left])/2;
      console.log(array[right], array[left], sum)
            
            if(sum == target) return true
            else if(sum < target)right++
            else left--       
    }
    return false

}
```
```
let ave = [1,2,3,5,6]
function averagePair(array, target){
    if(array.length === 0 || array.length === 1) return false

        let right = 0
        let left = array.length - 1;
    
    while(right < left){
            sum = (array[right] + array[left])/2;
            if(sum == target) return true
            else if(sum < target)right++
            else left--       
    }
    return false

}
```
### Summary 
- With this approach starting with a pointer at start and one at end.
- We can use a while loop while start is less than end.
- do some math
- Go through our checks
- Either return true
- Or move pointers left or right based on our if statements.
- I tried setting variables for righ = array[0] outside of the loop but it didn't work. Maybe it has something to do with the location of the index and how it reads it.