/**
 * 给定一组不含重复元素的整数数组 nums，返回子集
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */

function subsets(nums) {
    const res = [];

    const backtrack = (path, level, start) => {
        if (path.length === level) {
            res.push(path);
            return;
        }
        for (let i = start; i <= nums.length; i++) {
            backtrack([...path, nums[i]], level, i + 1);
        }
    };

    for (let i = 0; i < nums.length; i++) {
        backtrack([], i, 0);
    }

    return res;
}

console.log(subsets([1, 2, 3]));
