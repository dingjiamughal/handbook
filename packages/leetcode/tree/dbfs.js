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

console.log(bfs(tree));
