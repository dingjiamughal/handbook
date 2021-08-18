/**
 * 输入：ops = ["5","2","C","D","+"]
 * 输出：30
 *
 * 解释：
 * "5" - 记录加 5 ，记录现在是 [5]
 * "2" - 记录加 2 ，记录现在是 [5, 2]
 * "C" - 使前一次得分的记录无效并将其移除，记录现在是 [5].
 * "D" - 记录加 2 * 5 = 10 ，记录现在是 [5, 10].
 * "+" - 记录加 5 + 10 = 15 ，记录现在是 [5, 10, 15].
 * 所有得分的总和 5 + 10 + 15 = 30
 */
var calPoints = function (ops) {
    const result = [];

    ops.forEach(item => {
        switch (item) {
            case 'C':
                if (result.length) {
                    result.pop();
                }
                break;
            case 'D':
                const prev = result[result.length - 1];
                result.push(prev * 2);

                break;
            case '+':
                const prev1 = result[result.length - 1];
                const prev2 = result[result.length - 2];
                result.push(prev1 + prev2);

                break;
            default:
                result.push(+item);
        }
    });

    return result.reduce((memo, next) => memo + next);
};

console.log(calPoints(['5', '2', 'C', 'D', '+']));
