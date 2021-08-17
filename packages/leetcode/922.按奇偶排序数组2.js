/**
 * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
 * 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
 *
 * 输入：[4,2,5,7]
 * 输出：[4,5,2,7]
 * 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 */

// 一边排序一边添加索引
var sortArrayByParityII = function (nums) {
    let n = 1; // 奇
    let m = 0; // 偶
    const arr = [];

    for (let i = nums.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }

        if (nums[i] % 2 === 0) {
            arr[m] = nums[i];
            m = m + 2;
        }
        if (nums[i] % 2 === 1) {
            arr[n] = nums[i];
            n = n + 2;
        }
    }

    if (nums[0] % 2 === 0) {
        arr[m] = nums[0];
    }

    if (nums[0] % 2 === 1) {
        arr[n] = nums[0];
    }

    return arr;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
// console.log(sortArrayByParityII([3, 4]));
