'use strict';
function setIntervalMock(fn, interval) {
    let timer = null;
    requestAnimationFrame(function mock() {
        timer = setTimeout(function () {
            fn();
            requestAnimationFrame(mock);
        }, interval);
    });
    return timer;
}

function clearIntervalMock(timer){
    clearTimeout(timer);
}