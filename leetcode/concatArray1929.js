/**
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.
Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
 */

/**
 * loop through nums array
 * push each element of nums at the end of nums
 * EX: nums = [1,2,3]
 * when nums[0] = 1 nums.push(nums[i]) > nums = [1,2,3,1]
 * when nums[1] = 2 nums.push(nums[i]) > nums = [1,2,3,1,2]
 * when nums[2] = 3 nums.push(nums[i]) > nums = [1,2,3,1,2,3]
 * return nums
 * We are modify the input array
 * 
 *  
 */

var getConcatenation = function(nums) {
    for(let i in nums){
        nums.push(nums[i])
    }
    return nums
};

