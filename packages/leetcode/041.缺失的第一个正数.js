/**
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 *
 * 输入 [3,4,-1,1]
 * 输出 2
 *
 * [8,8,9,10]
 * 1
 */
var firstMissingPositive = function (nums) {
    nums = nums.filter(item => item > 0);
    nums.sort((a, b) => a - b);

    if (nums[0] !== 1) {
        return 1;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] - nums[i] > 1) {
            return nums[i] + 1;
        }
    }

    return nums[nums.length - 1] + 1;
};

var firstMissingPositive2 = function (nums) {
    nums = nums.filter(item => item > 0);

    for (let i = 0; i < nums.length; i++) {
        let min = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < min) {
                const temp = min;
                min = nums[j];
                nums[j] = temp;
            }
        }

        nums[i] = min;

        if (i > 0) {
            if (nums[i] - nums[i - 1] > 1) {
                return nums[i - 1] + 1;
            }
        } else {
            if (min !== 1) {
                return 1;
            }
        }
    }

    return nums.length ? nums[nums.length - 1] + 1 : 1;
};
console.log(firstMissingPositive2([3, 4, -1, 1]));
