const tree = {
    val: 'root',
    children: [
        {
            val: 'a',
            children: [
                { val: 'b', children: [] },
                { val: 'c', children: [] },
            ],
        },
        {
            val: 'd',
            children: [
                { val: 'e', children: [] },
                { val: 'f', children: [] },
            ],
        },
    ],
};

function dfs(tree) {
    console.log(tree.val);
    tree.children.forEach(dfs);
}

function bfs(tree) {
    const q = [tree];

    while (q.length) {
        const n = q.shift();

        console.log(n.val);

        n.children.forEach(child => q.push(child));
    }
}

// console.log(bfs(tree));

var arr = [1, 2, [3, [4]]];
function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        console.log(i, item);
        if (item instanceof Array) {
            arr.splice(i, 1, ...item);
        }
    }
}
flatten(arr);
console.log(arr);
