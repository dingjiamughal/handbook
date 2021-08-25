/**
 * 给定一个二叉树，找出其最大深度
 */
function maxDepth(root) {
    let res = 0;
    const dfs = (n, level) => {
        console.log(n);
        if (!n.left && !n.right) {
            res = Math.max(res, level);
        }
        dfs(n.left, level + 1);
        dfs(n.right, level + 1);
    };

    dfs(root, 1);
}
