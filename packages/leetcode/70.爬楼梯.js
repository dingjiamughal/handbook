/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 2 => 1+1
 * 3 => 1+1+1 / 1+2  / 2+1
 */

var climbStairs = function (n) {
    if (n < 4) {
        return n;
    }

    let a = 2;
    let b = 3;

    for (let i = 4; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};

console.log(climbStairs(5));
