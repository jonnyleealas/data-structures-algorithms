```
There is a hidden integer array arr that consists of n non-negative integers.

It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

Return the original array arr. It can be proved that the answer exists and is unique.

 

Example 1:

Input: encoded = [1,2,3], first = 1
Output: [1,0,2,1]
Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
Example 2:

Input: encoded = [6,2,7,3], first = 4
Output: [4,2,0,7,4]
```
/**
 * 
 * @param {*} encoded 
 * @param {*} first 
 * @returns 
 * This one doesn't make much sense unless you have an understanding of how xor works. I myself am still trying to understand it fully.
 * We are given the first index of the array > first
 * we loop through the encoded array and we start xoring at index i vs index i of result array
 * This means we take index i of encoded array and xor against index i of result[first]
 * We then push the result into result array
 * we return
 */
var decode = function(encoded, first) {
    //create result array and insert first in our 0 index
    let result = [first];
    //loop through encoded array
    for(let i in encoded){
        // push result[i] xor encoded[i] this will give us results of result[i] vs encoded[i] and push to the next index after first in result array
        result.push(result[i] ^ encoded[i])
    }
    // we get out of loop and return our result array
    return result
};