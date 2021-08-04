/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 */

const keyboardMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
};

function letterCombinations(digits) {
    return digits
        .split('')
        .reduce(
            (memo, next) => {
                const mergedArr = keyboardMap[next].split('');
                const temp = [];
                memo.forEach(m => {
                    mergedArr.forEach(n => {
                        temp.push(m + n);
                    });
                });

                return temp;
            },
            ['']
        )
        .filter(Boolean);
}

function letterCombinations2(digits) {
    let alphaArrs = digits.split('').map(num => keyboardMap[num].split(''));
    while (alphaArrs.length > 1) {
        const temp = [];

        alphaArrs[0].forEach(m => {
            alphaArrs[1].forEach(n => {
                temp.push(m + n);
            });
        });

        alphaArrs.splice(0, 2, temp);
    }

    return alphaArrs[0] || [];
}

console.log(letterCombinations2(''));
