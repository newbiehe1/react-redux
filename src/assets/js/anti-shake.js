function antiShake(fn, delay) {
    let timeOut = null;
    return function () {
        if (timeOut) clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fn.apply(this, arguments);
            timeOut = null;
        }, delay);
    };
}
export default antiShake;
