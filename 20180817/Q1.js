'use strict';
// 设计一个简单的红绿灯策略，
// 比如红灯亮分别为console.log(“red”)这种，
// 要求按照红3s-黄1s-绿1s顺序不断循环展示

function showLight(name, delay){
    return new Promise(resolve=>{
        setTimeout(function () {
            console.log(name)
            resolve();
        }, delay)
    });
}

function circleLight(){
    console.log('======================')
    showLight('红灯', 3000)
        .then(function () {
            return showLight('黄灯', 2000);
        })
        .then(function () {
            return showLight('绿灯', 1000);
        })
        .then(circleLight);
}

circleLight()