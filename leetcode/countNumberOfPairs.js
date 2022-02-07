```
2006. Count Number of Pairs With Absolute Difference K
Easy

413

10

Add to List

Share
Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.
 

Example 1:

Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
Example 2:

Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.
Example 3:

Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]
```

/**
 * 
 * @param {*} nums 
 * @param {*} k 
 * @returns 
 * Add each element in nums array into an object
 * if the element is in the object add 1
 * if the element is not in the object the object at element = 1 or key = element, value = 1
 * create a var for a counter called pairs
 * iterate through each value in the nums array and check if the compliment of element - k is in the object
 * if it is take the value of the element in object and add to pairs counter
 * [1,2,2,1] when we are in index 0 we subtract 1 - k and check if that key is in object 
 * if it isn't we keep going
 * once it is in object that means that we found the key that matches our k value meaning we found a pair
 * since our object has already counted how many of each element is in the numbs array we can just add our found pair value to our counter
 * This way every time we find a compliment number that matches our k value we can add the value of how many times it was seen in the array
 * Instead of us have to iterate, count, and keep track of everything the we use the object to count and keep track of pairs
 * All we do in the second loop is add a pair value from the object each time we find a compliment number
 * If the number of 1s = 2 and the number of 2s = 2, each two will find that its compliment to match k is 1. Each time we find a two and look for a 1 we will find 1 and add its value of 2 into our counter. Since there are 3 2s we will add 1s value 3 times, giving us a 6 pair.
 * 
 */
let countKDifference = function(nums, k){
    // create an object
    let difference = {};
    // if element in nums is in object ++ if not add element/key = 1/value;
    for(let i of nums){
        difference[i] ? difference[i]++ : difference[i] = 1
    }
    // create counter variable. We will add our pairs later
    pairs = 0;
    // loop through nums array
    for(let i in nums){
        // if the value in nums[i] subtracted by k is found in object meaning our compliment that matches k 
        if(difference[nums[i]-k]){
            // Add the objects value to pairs found at object[num[i]-k]
            pairs+= difference[nums[i]-k]
        }
    }
    // return count of pairs found
    return pairs;
}



console.log(countKDifference([1,2,2,1], 1))