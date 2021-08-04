/**
 * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000
 *
 * abab true
 * abc false
 * abcabcabc true
 */

// function repeatedSubstringPattern(s) {
//     const arr = s.split('');
//     let temp = '';
//     const tempArr = [];
//     if ([...new Set(arr)].length === 1 && arr.length !== 1) {
//         return true;
//     }

//     for (let i = 0, len = arr.length; i < len; i++) {
//         if (!temp) {
//             temp += arr[i];
//         } else {
//             if (temp[0] === arr[i] && temp[0] !== arr[i + 1]) {
//                 tempArr.push(temp);
//                 temp = arr[i];
//             } else {
//                 temp += arr[i];
//             }
//         }

//         if (i === len - 1) {
//             tempArr.push(temp);
//         }

//         if (tempArr.length > 1 && tempArr[0] !== tempArr[tempArr.length - 1]) {
//             return false;
//         }
//     }

//     if (tempArr.length <= 1) {
//         return false;
//     }

//     return true;
// }

function repeatedSubstringPattern(s) {
    return /^([a-z]+)\1+$/.test(s);
}

console.log(repeatedSubstringPattern('abcabcabc'));
