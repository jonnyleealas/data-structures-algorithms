# Sum Two
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

# Code Brute Force
- Time is O(nˆ2)
- start second loop 1 index head of i
    - add each number 
    - if theres a match return index i and index j
```
var twoSum = function(nums, target) {
    let array = [];
    for(let i = 0; i < nums.length; i++){
        for(let j= i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                array.push(i,j)
                
                return array
            } 
        } 
    }
};
```
```
function twoSum(nums, target) {
  let comp = new Map()
  const len = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in comp) {
      return [comp[target-nums[i]], i];
    } else {
      comp[nums[i]] = i;
    }
  }
  return [];
};
```