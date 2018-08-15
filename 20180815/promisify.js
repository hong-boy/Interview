'use strict';
// 美团
// 实现一个promisify函数，接收任意一个函数（可能含有异步回调，也可能直接返回值）
// 现要求函数被promisify包装之后对于异步回调能够返回Promise对象

// 函数定义：
// function promisify() {}
// function test1(a, b){
//     return a + b;
// }
// function test2(a, cb){
//     setTimeout(function(){
//         cb(a+2);
//     }, 100);
// }
// // 函数调用：
// promisify(test1)(1, 2) // 3
// promisify(test2)(1, param=>console.log(param)) // 3

function test1(a, b){
    return a + b;
}
function test2(a, cb){
    setTimeout(function(){
        cb(null, a+2);
    }, 100);
}

function promisify(originalFunc, needCallback=true){
    return function (...args) {
        let thiz = this;
        return new Promise(function (resolve, reject) {
            if(needCallback){
                // 异步回调
                originalFunc.call(thiz, ...args, function (err, ...rest) {
                    if(err){
                        return reject(err);
                    }
                    resolve(rest);
                });
            }else {
                // 非异步函数
                resolve(originalFunc.apply(thiz, args));
            }
        });
    }
}
promisify(test1, false)(1, 2)
    .then(function (result) {
        console.log('result: ', result);
    });

promisify(test2)(1)
    .then(function (rest) {
        console.log('rest: ', rest);
    });