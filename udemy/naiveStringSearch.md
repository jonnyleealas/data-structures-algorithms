# Naive String Search
- Count number times a smaller string is inside a larger string.
- Checking pairs of strings individually.

# Code Sample Naive Approach
- Create a function that takes an array and a sub string
- binding for counter
- loop through array
- loop through substing
- if substring at index j does not equal array at index i + j -->this will allow us to look ahead in our outer loop --> break
- if the length of j is equal to the sub string which is sub.length - 1 we add one to our counter
- Return counter outside our loops.
```
function naiveSubString(a, sub){
  let count = 0;

  for(let i=0;i<a.length; i++){
    for(let j=0;j<sub.length; j++){
      if(sub[j] !== a[i + j]){
        break
      }
      if(j === sub.length - 1){
        count++
      }
    }
  }
  return count
}

console.log(naiveSubString("aaa dd fffaaa", "aaa"))
```

# Summary Naive
- The trick to this is to have our if statement look ahead. Normally our nested loop checks according to index i of our outer loop. However, by adding our index of j to our outer loop it will allow us to view index i and also the next index according to j. If index of j = 0 it will look at index of i at position 0. If index of j is 2 it will add 2 to our outer loop and look at index i = 2. 
- We count only when the j loops length equals our sub string length. 