```
2006. Count Number of Pairs With Absolute Difference K
Easy

412

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
```

/**
 * 
 * @param {} nums 
 * @param {*} k 
 * @returns 
 * trick here is to add to the object and then count 
 */
var countKDifference = function(nums, k) {
    let map = {};
      for(let i of nums){
        map[i] ? map[i]++ : map[i]= 1;
        console.log(map[i])
      }
    
      count = 0;
      for(let i in nums){
        if(map[nums[i]-k]){
          count += map[nums[i]-k]
        }
      }
        return count
    };
    
    
    console.log(countKDifference([1,2,2,1], 1))