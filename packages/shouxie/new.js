function myNew(fn, ...args) {
    const instance = Object.create(fn.prototype);
    const res = fn.apply(instance, args);

    return typeof res === 'object' ? res : instance;
}
