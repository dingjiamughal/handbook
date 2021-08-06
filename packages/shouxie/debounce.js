function debounce(fn, delay = 100) {
    let timer;

    return function (...args) {
        timer && clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}
