// function cloneDeep(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }

function cloneDeep(target) {
    if (typeof target !== 'object') {
        return target;
    }

    return Object.entries(target).reduce((memo, [key, value]) => {
        if (typeof value === 'object') {
            cloneDeep(value);
        }

        memo[key] = value;

        return memo;
    }, {});
}

const a = { a: 1, b: { c: 1, d: 2 } };
const b = cloneDeep(a);
console.log(b);

b.a = 2;
console.log(b);
console.log(a);
