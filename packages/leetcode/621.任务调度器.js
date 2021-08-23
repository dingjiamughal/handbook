/**
 * 给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表。其中每个字母表示一种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。在任何一个单位时间，CPU 可以完成一个任务，或者处于待命状态。
 * 然而，两个 相同种类 的任务之间必须有长度为整数 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
 * 你需要计算完成所有任务所需要的 最短时间 。
 *
 * 输入：tasks = ["A","A","A","B","B","B"], n = 2
 * 输出：8
 * 解释：A -> B -> (待命) -> A -> B -> (待命) -> A -> B
 * 输入：tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
 * 输出：16
 * 解释：一种可能的解决方案是：
 * A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> (待命) -> (待命) -> A -> (待命) -> (待命) -> A
 */

var leastInterval = function (tasks, n) {
    const Q = {};
    let str = '';
    // 归类 aaaa bb ccc
    tasks.forEach(task => {
        if (Q[task]) {
            Q[task]++;
        } else {
            Q[task] = 1;
        }
    });

    while (1) {
        let keys = Object.keys(Q); // a b c

        // 所有任务都结束了
        if (!keys[0]) {
            break;
        }

        // 存储任务单元
        let temp = [];
        for (let i = 0; i <= n; i++) {
            let max = 0;
            let key;
            let pos;

            keys.forEach((item, index) => {
                if (Q[item] > max) {
                    max = Q[item];
                    key = item;
                    pos = index;
                }
            });

            if (key) {
                temp.push(key);
                keys.splice(pos, 1); // a b c 先取 a 就删 a
                Q[key]--;

                if (Q[key] === 0) {
                    delete Q[key];
                } else {
                    break;
                }
            }
            // console.log(temp);
            // n + 1不一定被填满，待命
        }

        str += temp.join('').padEnd(n + 1, 'x'); // [1, 2].padEnd(4, 'x') => [1, 2, 'x', 'x']

        // 边界处理s
        str = str.replace(/待命+$/g, '');
    }

    return str;
};

console.log(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2));
