function jsonp(obj) {
    const { url, data } = obj;
    if (!url) {
        return;
    }

    return new Promise((resolve, reject) => {
        const callback = `jsonp_${Date.now()}`;
        data.callback = callback;

        const head = document.querySelector('head');
        const script = document.querySelector('script');
        const src = `${url}?${data2Url(data)}`;

        script.src = src;
        head.appendChild(script);

        window[callback] = function (res) {
            res ? resolve(res) : reject('error');
            head.removeChild(script);
            window[callback] = null;
        };
    });
}

function data2Url(data) {
    return Object.keys(data)
        .reduce((memo, next) => {
            memo.push(`${next}=${data[next]}`);
            return memo;
        }, [])
        .join('&');
}

jsonp({ url: 'www.xxx.com', data: { a: 1, b: 2 } });
