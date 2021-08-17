/**
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 */

// 冒泡排序翻版
var findKthLargest = function (nums, k) {
    if (k === 1) {
        return nums[0];
    }
    for (let i = nums.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }

        if (nums.length - i === k) {
            return nums[i];
        }
    }
};

// console.log(findKthLargest([2, 1], 2));
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
