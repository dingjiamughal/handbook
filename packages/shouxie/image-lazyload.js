function imageLazyLoad() {
    const images = document.querySelectorAll('image');
    for (let img of images) {
        const src = img.dataset.src;
        if (!src) {
            continue;
        }

        if (isVisible(img)) {
            img.src = src;
            img.dataset.src = '';
        }
    }
}

function isVisible(el) {
    const pos = el.getBoundingClientRect();

    const windowHeight = document.documentElement.clientHeight;
    const topVisible = pos.top > 0 && pos.top < windowHeight;
    const botVisible = pos.bottom > 0 && pos.bottom < windowHeight;

    return topVisible || botVisible;
}
