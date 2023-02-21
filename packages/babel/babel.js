const babel = require('@babel/core');
const t = require('@babel/types');
const transformArrowPlugin = require('babel-plugin-transform-es2015-arrow-functions');
const code = `const a = (a, b) => a + b`;

const res = babel.transform(code, {
    plugins: [
        {
            visitor: {
                ArrowFunctionExpression(path) {
                    path.node.type = 'FunctionExpression';
                    path.findParent;

                    // after
                    if (t.isBinaryExpression(path.node.body)) {
                        path.node.body = t.blockStatement([t.returnStatement(path.node.body)]);
                    }

                    // before
                    // if (path.node.body.type === 'BinaryExpression') {
                    //     const node = path.node.body;
                    //     path.node.body = {
                    //         type: 'BlockStatement',
                    //         body: [
                    //             {
                    //                 argument: node,
                    //                 type: 'ReturnStatement'
                    //             }
                    //         ]
                    //     };
                    // }
                }
            }
        }
    ]
});

console.log(res.code);
