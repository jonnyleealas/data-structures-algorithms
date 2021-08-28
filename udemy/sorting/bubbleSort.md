# Bubble Sort
- The larger values will bubble to the top.
- [Visualgo](https://visualgo.net/en)
- We compare the current item to its next item and swap places if the next item is larger than the current item.

# Time Complexity
- O(nˆ2) worst case
- O(n) best case if our input is sorted
# How to swap
- Save temp for current
- swap current with next index
- Update index 2 to be the temp
```
function swap(arr, idx, idx2){
    var temp = arr[idx]
    arr[idx] = arr[idx2]
    arr[idx2] = temp

}
```

# Code Example Bubble 
- Function takes an array
- Loop through array.
    - Instead of setting i to equal 0 we will set it to the length of the array. Ex: [1,2,3] --> length = 3 --> let i = array.length 
    - From the length of the array we count down --> i > 0 --> while the length of the array is greater than 0
    - We then decrement i at each iteration of the loop --> i--

- Set another loop to loop the amount of the length of i - 1
    - The second loop only needs to loop 3 times if the length of the outer loop is 4
    - If the current index of j is greater than the next index [j + 1] we swap the values. 
    - return the array
```
We set i to i = array.length
[1,4,2,4] array.length = 4 = i ; j = 3
We set our inner loop to run 1 less than our outer loop.
[1,2,4,4] i = 2; j =1

function bubbleSort(array){

    for(let i= array.length; i > 0; i--){
        for(let j=0; j < i - 1; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j]
                    array[j] = array[j + 1]
                    array[j+1] = temp
            }
        }
    }
    return array
}
```
# Summary Bubble Sort
- We go through our array and check whether our current index is greater than our next index.
- If it is greater we swap our next index with our current index.
- At our first check our greatest number should sort to the end of our array. 
- If the first loop the length of our array starts at 4 then the next time our loop will have to check 1 less element because the last element will be sorted on the first run.
- i - 1 means 1 less than the length of the array.

    # Learns
    -  Setting i to let i= array.length --> We are setting i to the number of things in our array.
    -  Looping for i > 0 --> Means while the number of things in our array is greater than 0
    - i-- will decrement i so that at some point i will be less than 0; thats when our loop will stop.
    - To summarize: With loops we must set a variable for a number, conditionals using that number, and counters to update our number.This is how we program the loop and tell it how many times to run.

# Bubble Sort Edge Case
- Added edge case incase our array is sorted
- Setting sorted as true and updating to false will help us break out of our function if everything in our array is sorted.

```

function bubbleSort(array){
    let noSwaps;
    for(let i= array.length; i > 0; i--){
        noSwap = true
        for(let j=0; j < i - 1; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j]
                    array[j] = array[j + 1]
                    array[j+1] = temp
                    noSwap = false
            }
        }
        if(noSwap) break;
    }
    return array
}
```