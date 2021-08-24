const bt = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: null,
            right: null,
        },
    },
    right: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
};

function preOrder(bt) {
    if (!bt) {
        return;
    }
    console.log(bt.val);

    preOrder(bt.left);
    preOrder(bt.right);
}

function inOrder(bt) {
    if (!bt) {
        return;
    }

    inOrder(bt.left);
    console.log(bt.val);
    inOrder(bt.right);
}

function postOrder(bt) {
    if (!root) {
        return;
    }

    postOrder(bt.left);
    postOrder(bt.right);
    console.log(bt.val);
}

function stackPreOrder(bt) {
    if (!bt) {
        return;
    }

    const stack = [bt];

    while (stack.length) {
        const n = stack.pop();
        console.log(n.val);
        if (n.left) {
            stack.push(n.right);
            stack.push(n.left);
        }
    }
}

function stackInOrder(bt) {
    if (!root) {
        return;
    }

    const stack = [];

    let p = stack;
    while (stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.left;
        }

        const n = stack.pop();
        console.log(n.val);
        p = n.right;
    }
}

// console.log(preOrder(bt));
console.log(inOrder(bt));
