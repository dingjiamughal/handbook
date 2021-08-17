// i 和 [i+1, end] 比较，前面大于后面，交换
function select(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                let temp = min;
                min = arr[j];
                arr[j] = temp;
            }
        }

        arr[i] = min;
    }

    return arr;
}

console.log(select([1, 4, 6, 5, 2, 7, 3]));
