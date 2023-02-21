// const esprima = require('esprima');
// const estraverse = require('estraverse');
// const escodegen = require('escodegen');

// const code = `function a () {}`;

// const ast = esprima.parseScript(code);

// estraverse.traverse(ast, {
//     enter(node) {
//         console.log('enter:' + node.type);

//         if (node.type === 'FunctionDeclaration') {
//             node.id.name = 'ast';
//         }
//     },
//     leave(code) {
//         console.log('leave:' + code.type);
//     }
// });

// console.log();
// console.log(escodegen.generate(ast));

const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

const code = `const a = () => {}`;

const ast = esprima.parseScript(code);

estraverse.traverse(ast, {
    enter(node) {
        console.log('enter:' + node.type);

        if (node.type === 'VariableDeclarator') {
            node.init.type = 'FunctionExpression';
        }
    },
    leave(code) {
        console.log('leave:' + code.type);
    }
});

console.log();
console.log(escodegen.generate(ast));
