const a = {
    haha: '123',
};

function b(...arg) {
    console.log(this);
    console.log(arg);
}

// b.call(a, 1, 2, 3);
// b.apply(a, [1, 2, 3]);

Function.prototype.mycall = function (ctx = window, ...args) {
    const key = Symbol('key');

    // 1. 把上下文对象设置key=function
    ctx[key] = this;
    // 2. 执行
    const result = ctx[key](...args);
    // 不删除key会累加
    delete ctx[key];
    // 返回的是ctx[key]执行的函数，this是ctx
    return result;
};

Function.prototype.myapply = function (ctx = window, ...args) {
    const key = Symbol('key');

    ctx[key] = this;
    const result = ctx[key](args);

    delete ctx[key];

    return result;
};

Function.prototype.mybind = function (ctx = window, ...args) {
    let _this = this;

    return function F(...innerArgs) {
        // new 的方式
        if (_this instanceof F) {
            return new _this(...args, ...innerArgs);
        }

        return _this.apply(ctx, [...args, ...innerArgs]);
    };
};

b.mycall(a, 1, 2, 3);
b.mycall(a, 1, 2, 3, 4);
b.myapply(a, [1, 2, 3]);

b.mybind(a, 1, 2, 3)(4);
