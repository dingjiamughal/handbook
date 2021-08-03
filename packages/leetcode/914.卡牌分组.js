/**
 *
 * 给定一副牌，每张牌上都写着一个整数。
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 * 每组都有 X 张牌。组内所有的牌上都写着相同的整数。
 *
 * 输入：[1,2,3,4,4,3,2,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
 *
 * 输入：[1,1,1,2,2,2,3,3]
 * 输出：false
 *
 * 输入：[1,1,2,2,2,2]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[2,2]
 */

function hasGroupsSizeX(deck) {
    // 最大公约数计算公式
    function gcd(num1, num2) {
        return num2 === 0 ? num1 : gcd(num2, num1 % num2);
    }

    // 先排序
    deck.sort((a, b) => a - b);

    let min = Number.MAX_SAFE_INTEGER; // 最大公约数 初始值给一个max
    let dst = [];

    for (let i = 0, len = deck.length, temp = []; i < len; i++) {
        temp.push(deck[i]);

        for (let j = i + 1; j < len; j++) {
            if (deck[i] === deck[j]) {
                // console.log(deck[i]);
                temp.push(deck[j]);
            } else {
                // 1,1,1 min = 3
                // 2,2,2,2 min = 3
                // 3,3 min = 2
                if (min > temp.length) {
                    min = temp.length;
                }

                dst.push([...temp]);
                temp.length = 0;

                i = j - 1; // 1,1,1,2 i从2的下标开始
                break;
            }

            if (j === len - 1) {
                dst.push([...temp]);

                if (min > temp.length) {
                    min = temp.length;
                }

                i = j - 1;
                break;
            }
        }
    }

    if (!dst.length || min === 1) {
        return false;
    }

    //   return dst.every(item => item.length % min === 0);

    let g = dst[0].length;

    // 遍历出现次数，计算最大公约数
    dst.forEach((time) => {
        // 因为需要比较所有牌出现次数的最大公约数，故需要一个中间值
        g = gcd(g, time.length);
    });

    // 判断是否满足题意
    return g >= 2;
}

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2, 3, 3]));
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]));
console.log(hasGroupsSizeX([0, 0, 0, 0, 0, 1, 1, 2, 3, 4]));
console.log(hasGroupsSizeX([1, 1, 1, 1, 1, 0, 0, 0]));
console.log(hasGroupsSizeX([1]));
