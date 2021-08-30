# Insertion Sort
- Takes a sorted portion
    - Inserts element into sorted portion

# Big O
- Worst O(nˆ2)
- Great for data that is coming in live or streaming and needs to be sorting asap

# Space 
- O(1)
# Code
```
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        for(var j= i - 1; j >= 0 && arr[j] > current; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current
    }
    return arr
}

```
# Summary
- Nested for loop
- Save index of i value -- current = arr[i]
    - Second loop starts at i -1 so it can look at the number behind i
    - (j - 1)
    - While j >= 0 && arr[j] > current; j-- /// --> this will check that every element before i and swap, if the element before i is not greater than i the j loop will stop and the i loop will ++
    - once j loop resets it will place current to the correct place /// arr[j+1] = current
    - j loop decrements 1 index at each iteration. We have to make sure we are leaving j at its position and swapping j + 1 with current.
    - note that j has to be a var not a let. Because it has to be used outside its scope.
        - Return arr

# Ah ha notes
- The function won't stop till the outer loop has gone through each element in the array.
- The nested loop will check the numbers before the current number the outer loop is on.
    - If the array is [3,4,5,2,7] i = 2
    - nested loop will check 5, 4, 3 and swap until it needs to break
        - If the nested loop breaks the outer loop will go to 7
        - the nested loop will then check 2,5,4,3 and swap until it needs to break.