/**
 * 每轮游戏，我都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字
 * 如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。
 *
 * 输入：n = 10, pick = 6
 * 输出：6
 */

var guessNumber = function (n) {
    function guess(num) {
        if (num === n) {
            return 0;
        } else if (num > n) {
            return -1;
        } else {
            return 1;
        }
    }

    function rec(low, high) {
        if (low > high) {
            return;
        }

        const mid = Math.floor((low + high) / 2);
        const res = guess(mid);

        if (res === 0) {
            return mid;
        } else if (res === 1) {
            return rec(mid + 1, high);
        } else {
            return rec(1, mid - 1);
        }
    }
    return rec(1, n);
};

console.log(guessNumber(6));
