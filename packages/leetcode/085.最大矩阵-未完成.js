/**
 * 给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积
 */

// 先找出1的区间，再向下取交集合并
var maximalRectangle = function (matrix) {
    let result = [];
    const reg = /1{2,}/g;

    matrix = matrix.map(item => {
        let s = item.join('');

        let r = reg.exec(s);
        const rs = [];

        while (r) {
            rs.push([r.index, r.index + r[0].length - 1]);
            r = reg.exec(s);
        }

        return rs;
    });

    // 取交集
    let rec = (arr, res, n = 1) => {
        let top = arr.pop();
        let next = arr.pop();
    };

    return matrix;
};

console.log(
    maximalRectangle([
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
    ])
);
