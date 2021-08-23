function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
        throw new TypeError('type error');
    }

    let isUsed;

    if (x && (typeof x === 'object' || typeof x === 'function')) {
        try {
            if (typeof x.then === 'function') {
                // promise
                x.then.call(
                    x,
                    y => {
                        if (isUsed) {
                            return;
                        }
                        isUsed = true;
                        resolvePromise(promise, y, resolve, reject);
                    },
                    err => {
                        if (isUsed) {
                            return;
                        }
                        isUsed = true;

                        reject(err);
                    }
                );
            } else {
                // 普通对象或函数
                resolve(x);
            }
        } catch (err) {
            if (isUsed) {
                return;
            }
            isUsed = true;
            reject * err;
        }
    } else {
        resolve(x);
    }
}
class myPromise {
    constructor(fn) {
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onFullfilledArray = [];
        this.onRejectedArray = [];

        const resolve = value => {
            if (this.status === 'pending') {
                this.value = value;
                this.status = 'resolved';

                // 异步case fn -> then --- timeout -> resolve
                this.onFullfilledArray.forEach(fn => fn(this.value));
            }
        };

        const reject = reason => {
            if (this.status === 'pending') {
                this.reason = reason;
                this.status = 'rejected';

                this.onRejectedArray.push(fn => fn(this.reason));
            }
        };

        try {
            fn(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    // 链式调用 + 返回 promise
    then(onFullfilled, onRejected) {
        const self = this;
        if (this.status === 'pending') {
            return new myPromise((resolve, reject) => {
                self.onFullfilledArray.push(() => {
                    try {
                        const template = onFullfilled(self.value); // 上一个函数的返回值 -> 下一个 then
                        resolvePromise(template);
                    } catch (err) {
                        reject(err);
                    }
                });

                self.onRejectedArray.push(() => {
                    try {
                        const template = onRejected(self.value);
                        resolvePromise(template);
                    } catch (err) {
                        reject(err);
                    }
                });
            });
        }
        if (this.status === 'resolved') {
            return new myPromise((resolve, reject) => {
                try {
                    const template = onFullfilled(self.value);
                    resolvePromise(template);
                } catch (err) {
                    reject(err);
                }
            });
        } else if (this.status === 'rejected') {
            return new myPromise((resolve, reject) => {
                try {
                    const template = onRejected(self.value);
                    resolvePromise(template);
                } catch (err) {
                    reject(err);
                }
            });
        }
    }

    static resolve(value) {
        if (value instanceof Promise) {
            return value;
        }

        return new myPromise((resolve, reject) => {
            if (value && value.then && typeof value.then === 'function') {
                value.then(resolve, reject);
            } else {
                resolve(value);
            }
        });
    }

    static reject(reason) {
        return new myPromise((resolve, reject) => {
            reject(reason);
        });
    }

    finally(callback) {
        this.then(
            value => {
                return myPromise.resolve(callback()).then(() => value);
            },
            err => {
                return myPromise.resolve(callback()).then(() => {
                    throw err;
                });
            }
        );
    }

    static all(promises) {
        return new myPromise((resolve, reject) => {
            let result = [];
            let index = 0;
            let len = promises.length;
            if (len === 0) {
                resolve(result);
                return;
            }
            for (let i = 0; i < len; i++) {
                myPromise
                    .resolve(promises[i])
                    .then(data => {
                        result[i] = data;
                        index++;

                        if (index === len) {
                            resolve(result);
                        }
                    })
                    .catch(err => reject(err));
            }
        });
    }
}

var p = new myPromise(function (resolve, reject) {
    resolve(1);
});

p.then(function (x) {
    console.log(x);
});
