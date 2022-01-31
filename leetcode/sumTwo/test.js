let twoSum = function(nums, target){
    let compliment = {};

    for(let i=0; i < nums.length; i++){
        if(target - nums[i] in compliment){
            return [compliment[target-nums[i]], i];
        } else {
            compliment[nums[i]] = i;
        }
    }
    return [];
};

console.log(twoSum([3,2,4], 5))