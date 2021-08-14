/**
 * 每间房内都藏有一定的现金，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警
 *
 * 输入：[1,2,3,1]
 * 输出：4 = 1 + 3
 *
 * 输入：[2,7,9,3,1]
 * 输出：12 = 2 + 9 + 1
 */

// f(k) = max(f(k - 2) + ak, f(k - 1))
var rob = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    const dp = [0, nums[0]]; // 存放方案最大值

    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
    }

    console.log(dp);

    return dp[nums.length];
};

var rob2 = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let a = 0;
    let b = nums[0];

    for (let i = 2; i <= nums.length; i++) {
        const temp = Math.max(a + nums[i - 1], b);
        a = b;
        b = temp;
    }

    return b;
};

console.log(rob2([2, 7, 9, 3, 1]));
