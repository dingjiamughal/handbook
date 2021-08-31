/**
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]}
 */
var permute = function (nums) {
    const res = [];

    const backtrack = path => {
        console.log(path);
        if (path.length === nums.length) {
            res.push(path);
            return;
        }
        nums.forEach(num => {
            if (path.includes(num)) {
                return;
            }
            backtrack([...path, num]);
        });
    };

    backtrack([]);

    return res;
};

console.log(permute([1, 2, 3]));
