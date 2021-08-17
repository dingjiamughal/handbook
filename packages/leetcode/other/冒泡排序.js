// i + 1 和 i 比较，前面大于后面，交换位置
function bubble(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(bubble([1, 2, 5, 3, 6, 3, 4, 1, 5]));
