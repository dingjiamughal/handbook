/**
 * 给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置
 * 子串要与 words 中的单词完全匹配，中间不能有其他字符
 * 输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
 * 输出：[]
 *
 * 输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
 * 输出：[6,9,12]
 */
var findSubstring = function (str, words) {
    // 保存结果
    let result = [];
    // 记录数组的长度，做边界条件计算
    let num = words.length;
    // 递归函数体
    let range = (r, _arr) => {
        if (r.length === num) {
            result.push(r);
        } else {
            _arr.forEach((item, idx) => {
                let tmp = [].concat(_arr);
                tmp.splice(idx, 1);
                range(r.concat(item), tmp);
            });
        }
    };
    range([], words);
    // [0, 9, -1] filter 之后[0,9]
    return result
        .map(item => str.indexOf(item.join('')))
        .filter(item => item !== -1)
        .sort();
};
