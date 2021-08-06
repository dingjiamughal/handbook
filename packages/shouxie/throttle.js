function throttle(fn, delay) {
    let lastTime = 0;

    return function (...args) {
        let now = +new Date();

        if (now - lastTime > delay) {
            fn.apply(this, args);
            lastTime = now;
        }
    };
}

setInterval(
    throttle(() => console.log(1), 1000),
    600
);
