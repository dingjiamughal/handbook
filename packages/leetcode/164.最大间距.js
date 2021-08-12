/**
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。如果数组元素个数小于 2，则返回 0。
 *
 * 输入: [3,6,9,1]
 * 输出: 3
 *
 * 输入: [10]
 * 输出: 0
 *
 */

var maximumGap = function (arr) {
    if (arr.length < 2) {
        return 0;
    }

    arr.sort((a, b) => a - b);

    let max = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let temp = arr[i + 1] - arr[i];

        if (temp > max) {
            max = temp;
        }
    }

    return max;
};

var maximumGap2 = function (arr) {
    if (arr.length < 2) {
        return 0;
    }

    if (arr.length === 2) {
        return Math.abs(arr[0] - arr[1]);
    }

    let max = 0;
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

        if (i < arr.length - 1) {
            const dis = arr[i + 1] - arr[i];

            if (dis > max) {
                max = dis;
            }
        }
    }

    return max;
};

console.log(maximumGap2([3, 6, 9, 1]));
console.log(maximumGap2([1, 100]));

console.log(maximumGap2([1, 2, 5, 3, 6, 3, 4, 1, 5]));
