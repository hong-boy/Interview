'use strict';
// 请实现一个throttle(func, wait)函数请实现一个throttle(func, wait)函数
/**
 * 函数节流
 * @param{function} func 目标函数
 * @param{number} wait 等待间隔
 */
function throttle(func, wait){
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(func, wait);
    }
}

function test() {
    function log(){
        console.log(Date.now());
    }
    let wrappedFn = throttle(log, 500);
    wrappedFn();
    // wrappedFn();
    // wrappedFn();
    // wrappedFn();
}

test();
