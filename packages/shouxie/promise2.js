const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise2 {
    constructor(fn) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.successCb = [];
        this.failCb = [];

        try {
            fn(this.resolve, this.reject);
        } catch (err) {
            this.reject(err);
        }
    }

    resolve = value => {
        if (this.status !== PENDING) {
            return;
        }
        this.status = FULFILLED;
        this.value = value;

        while (this.successCb.length) this.successCb.shift()();
    };

    reject = reason => {
        if (this.status !== PENDING) {
            return;
        }
        this.status = REJECTED;
        this.reason = reason;

        while (this.failCb.length) this.failCb.shift()();
    };

    then(successCb, failCb) {
        successCb = successCb ? successCb : value => value;
        failCb = failCb
            ? failCb
            : reason => {
                  throw reason;
              };

        let p = new Promise2((resolve, reject) => {
            if (this.status === FULFILLED) {
                // x是个值，直接resolve(x)
                // x是promise，查看 promise 对象返回结果
                setTimeout(() => {
                    try {
                        const x = successCb(this.value);
                        resolvePromise(x, p, resolve, reject);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            } else if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        const x = failCb(this.reason);
                        resolvePromise(x, p, resolve, reject);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            } else {
                this.successCb.push(() => {
                    setTimeout(() => {
                        try {
                            const x = successCb(this.value);
                            resolvePromise(x, p, resolve, reject);
                        } catch (err) {
                            reject(err);
                        }
                    }, 0);
                });
                this.failCb.push(() =>
                    setTimeout(() => {
                        try {
                            const x = failCb(this.reason);
                            resolvePromise(x, p, resolve, reject);
                        } catch (err) {
                            reject(err);
                        }
                    }, 0)
                );
            }
        });

        return p;
    }

    static all(promises) {
        const stack = [];
        let index = 0;

        return new Promise2((resolve, reject) => {
            function pushTarget(i, value) {
                stack[i] = value;
                index++;

                if (index === promises.length) {
                    resolve(stack);
                }
            }

            for (let i = 0; i < promises.length; i++) {
                const p = promises[i];

                if (p instanceof Promise2) {
                    p.then(
                        value => pushTarget(i, value),
                        reason => reject(reason)
                    );
                } else {
                    pushTarget(i, p);
                }
            }
        });
    }

    static resolve(value) {
        if (value instanceof Promise2) {
            return value;
        }
        return new Promise2(resolve => resolve(value));
    }

    finally(cb) {
        return this.then(
            value => Promise2.resolve(cb()).then(() => value),
            reason =>
                Promise2.resolve(cb()).then(() => {
                    throw reason;
                })
        );
    }

    catch(cb) {
        return this.then(undefined, cb);
    }
}

function resolvePromise(x, promise, resolve, reject) {
    if (x === promise) {
        return reject(new TypeError('promise.then 不能返回自身'));
    }
    if (x instanceof Promise2) {
        x.then(resolve, reject);
    } else {
        resolve(x);
    }
}

// const p = new Promise2((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
//     // resolve(1);
//     // reject(1);
// });

// const p1 = p
//     .then(
//         res => {
//             console.log('s1', res);
//             // return 'aaaa';
//             return new Promise2((resolve, reject) => {
//                 resolve('haha');
//             });
//         },
//         reason => {
//             console.log('x', reason);
//             return 'mm';
//         }
//     )
//     .then(
//         res => {
//             console.log('res', res);
//         },
//         reason => {
//             console.log(reason);
//         }
//     );

function async1() {
    return new Promise2((resolve, reject) => setTimeout(() => resolve('a1'), 1000));
}
function async2() {
    return new Promise2((resolve, reject) => resolve('a2'));
}

Promise2.all(['a', 'b', async1(), async2(), 'c']).then(res => {
    console.log(res);
});

async1()
    .finally(() => {
        console.log('111');
        return 'async1';
    })
    .then(
        res => console.log('final', res),
        reason => console.log('reason', reason)
    );

// -------------------- 默写 --------------------

class Promise3 {
    constructor(fn) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.successCb = [];
        this.failCb = [];

        try {
            fn(this.resolve, this.reject);
        } catch (err) {
            this.reject(err);
        }
    }

    resolve = value => {
        if (this.status !== PENDING) {
            return;
        }
        this.value = value;
        this.status = FULFILLED;

        while (this.successCb.length) this.successCb.shift()();
    };

    reject = reason => {
        if (this.status !== PENDING) {
            return;
        }
        this.reason = reason;
        this.status = REJECTED;

        while (this.failCb.length) this.failCb.shift()();
    };

    then(successCb, failCb) {
        successCb = successCb ? successCb : value => value;
        failCb = failCb
            ? failCb
            : reason => {
                  throw reason;
              };

        if (this.status === FULFILLED) {
            return new Promise3((resolve, reject) => {
                setTimeout(() => {
                    try {
                        const x = successCb(this.value);
                        resolveP(x, Promise3, resolve, reject);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            });
        } else if (this.status === REJECTED) {
            return new Promise3((resolve, reject) => {
                setTimeout(() => {
                    try {
                        const x = failCb(this.reason);
                        resolveP(x, Promise3, resolve, reject);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            });
        } else {
            this.successCb.push(() => {
                setTimeout(() => {
                    try {
                        const x = successCb(this.value);
                        resolveP(x, Promise3, resolve, reject);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            });
            this.failCb.push(() => {
                setTimeout(() => {
                    try {
                        const x = failCb(this.reason);
                        resolveP(x, Promise3, resolve, reject);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            });
        }
    }

    static all(promises) {
        const stack = [];
        let index = 0;

        return new Promise3((resolve, reject) => {
            function pushTarget(i, value) {
                stack[i] = value;
                index++;

                if (index === promises.length) {
                    resolve(stack);
                }
            }

            for (let i = 0; i < promises.length; i++) {
                const p = promises[i];
                if (p instanceof Promise3) {
                    p.then(
                        value => pushTarget(i, value),
                        reason => reject(reason)
                    );
                } else {
                    pushTarget(i, p);
                }
            }
        });
    }

    static resolve(value) {
        if (value instanceof Promise3) return value;
        return new Promise3(resolve => resolve(value));
    }

    catch(fn) {
        return this.then(undefined, fn);
    }

    finally(cb) {
        return this.then(
            value => Promise3.resolve(cb()).then(() => value),
            reason =>
                Promise3.resolve(cb()).then(() => {
                    throw reason;
                })
        );
    }
}

function resolveP(x, promise, resolve, reject) {
    if (x === promise) {
        throw Error('不能返回自身');
    }

    if (x instanceof promise) {
        x.then(resolve, reject);
    } else {
        resolve(x);
    }
}
