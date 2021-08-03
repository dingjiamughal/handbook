/**
 * 输入：flowerbed = [1,0,0,0,1], n = 1
 * 输出：true
 *
 * 输入：flowerbed = [1,0,0,0,1], n = 2
 * 输出：false
 */

function canPlaceFlowers(flowerbed, n) {
    let num = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] === 0 &&
            flowerbed[i + 1] !== 1 &&
            flowerbed[i - 1] !== 1
        ) {
            num++;
            i++;
        }
    }

    return num >= n;
}

console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 1)); // false
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)); // true
