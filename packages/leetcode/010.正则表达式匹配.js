/**
 * 输入：s = "mississippi"
 *      p = "mis*is*p*."
 * 输出：false
 */
var isMatch = function (s, p) {
    const group = p.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g);

    let cur = 0;
    let strLen = s.length;

    for (let i = 0, len = group.length; i < len; i++) {
        if (group[i][1] === '*') {
            if (group[i][0] === '.') {
                cur = strLen;
                break;
            } else {
                while (s[cur] === group[i][0]) {
                    cur++;
                }
            }
        } else {
            for (let j = 0, jLen = group[i].length; j < jLen; j++) {
                if (group[i][j] !== s[cur]) {
                    return false;
                } else {
                    cur++;
                }
            }
        }
    }
    return cur === strLen;
};

console.log(isMatch('mississippi', 'mis*is*ip*i')); // true
console.log(isMatch('mississippi', 'mis*is*p*.')); // false
