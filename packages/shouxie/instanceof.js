// 循环原型链
function instanceOf(target, classFunc) {
    let proto = Object.getPrototypeOf(target);

    while (true) {
        if (proto == null) {
            return false;
        }

        if (proto == classFunc.prototype) {
            return true;
        }

        proto = Object.getPrototypeOf(proto);
    }
}

console.log(instanceOf([], Array));
