/**
 * 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。
 * 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。即使有多个不同答案，你也只需要返回其中一种
 * 格雷编码序列必须以 0 开头。
 */

// 输入: 2;
// 输出: [0, 1, 3, 2];
// 解释:
// 00 - 0;
// 01 - 1;
// 11 - 3;
// 10 - 2;

// 输入 3

function grayCode(n) {
    const make = n => {
        if (n === 1) {
            return ['0', '1'];
        } else {
            // 一开始 [0, 1] 循环 [0, 1] 头00 尾10  头01 尾11 => result: 00 01 11 10
            let prev = grayCode(n - 1);
            let result = [];

            let max = Math.pow(2, n) - 1; // 2 => 4行 3 => 8行
            // 头尾对称 头补0 尾补1
            for (let i = 0; i < prev.length; i++) {
                result[i] = '0' + prev[i];
                result[max - i] = '1' + prev[i];
            }

            return result;
        }
    };

    return make(n).map(item => parseInt(item, 2));
}

console.log(grayCode(2));
