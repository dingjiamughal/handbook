function curry(fn, ...args) {
    console.log(args);
    if (fn.length <= args.length) {
        return fn(...args);
    }

    return (...args1) => {
        return curry(fn, ...args, ...args1);
    };
}

const add = (a, b, c) => a + b + c;

const c = curry(add);

console.log(c(1)(2)(3));
