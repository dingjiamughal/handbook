/**
 * 输入：nums = [2, 7, 11, 15], target = 9
 * 输出：[0, 1]
 */

var twoSum = function (nums, target) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in obj) {
            return [obj[nums[i]], i];
        } else {
            obj[target - nums[i]] = i;
        }
    }
};

console.log(twoSum([3, 0, 3], 6));
