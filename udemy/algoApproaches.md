# Algo approaches and patterns
- Devise a plan
- Compare and contrast problem solving patterns.

# Algo is
- Set of steps to accomplish a task.
 
 # How to improve
 - Devise a plan 
 - Master Patterns

 # Patterns
 - Freq counter
 - multiple pointers
 - sliding window
 - Divide and conquer
 - Dynamic programming 
 - Greedy algo
 - Backtracking

 # Frequency Counter
 - Use an Object to collect values and compare 
 - Helps avoid nested loops.
 - Frequency of things that occur

## This checks to see if array 2 contains array 1 but squared
 ```
let arr1 = [1,2,3]
let arr2 = [1,4,9]

/**
 * create empty obj
 * create a variable in the loop for an element
 * loop through array
 * Take array 1 and add the square result to object
 * then we can check the second array and see if it is in the object
 * if it is not in the object return false
 * else return true
 */

let freq = (a,b)=>{
  //check if lengths dont match return false
  if(a.length != b.length){
    return false;
  }
// create empty obj for each array
  let obj1 = {}
  let obj2 = {}
// add array 1
  for(let element of a){
    obj1[element] = (obj1[element] || 0) +1
  }
// add array 2
  for(let element of b){
    obj2[element] = (obj2[element] || 0) +1
  }

// loop through objects and compare for in is for looping objects
for(let key in obj1){
  // this checks to see if the keys squared are in obj2
  if(!(key ** 2 in obj2)){
    return false
  }
  // if the value that is in obj2[key**2] is not the same value in obj1[key]

  // This checks if the values of key squared match the values in obj1. The keys and the values need to match in order to return true.
  if(obj2[key**2] !== obj1[key]){
    return false
   }
 }
  return true
}

```

## Anagram 1
```
let arr1 = "apple"
let arr2 = "pplea"

let anagram = (a,b)=>{
  if(a.length != b.length){
    return false
  }
  let obj1 = {}
  let obj2 = {}

  for(let char of a){
    obj1[char] = (obj1[char] || 0) +1
  }

  for(let char of b){
    obj2[char] = (obj2[char] || 0) +1
  }

  for(let key in obj1){
    if(!(key in obj2)){
      return false
    }

    if(obj1[key] != obj2[key]){
      return false
    }
  }
  return true
}

console.log(anagram(arr1, arr2))
```
## Anagram 2
```


let anagram = (a,b)=>{
    if(a.length != b.length){
        return false
    }

    let obj = {};

    for(let i of a){
      console.log(i)
        obj[i] ? obj[i] ++ : obj[i] = 1
    }
    for(let i of b){
console.log(i)
// this means i cant find obj[i] or obj[i] is 0
// Thats why we subtract each time we find a letter. Once it gets to zero we will be able to exit the conditional if !obj[i]
        if(!obj[i]){
            return false
        } else { 
          console.log(obj)
          obj[i]--
      }
    }
    return true
}
console.log(anagram(arr1, arr2))

```

# Summary
- Understand the problem
- Come up with examples
- Break down the problems
- Simplify small segments and combine solutions 
    - Think about input and output
    - Think about edge cases, This may help solve if you're stuck on something

# Summary on Frequency
- Be create an object and add elements to the object for comparison
- If the length of both arrays arent the same then we know that we don't have a match.
- We loop through each element and add to obj
- We compare keys of object to see if they match
- We compare values of object to see if they match
- We can also subtract 1 from key: val every time we find a match. We want our values to all be zero after our comparison is complete. If we make a comparison and we've already reached zero we can break our of our conditional and return false. 
- for(let i in obj) is a loop we can use for objects.