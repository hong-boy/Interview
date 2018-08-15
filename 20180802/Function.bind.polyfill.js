'use strict';
// 实现Function.prototype.bind
// 1 实现如下输出：
// function foo(){
//     console.log('name: ', this.name);
// }
//
// var obj = {name:'obj'}, obj2={name:'obj2'}, obj3={name:'obj3'};
// var fooOBJ = foo.bind(obj);
// fooOBJ(); // 输出 name: obj
// obj2.foo = foo.bind(obj);
// obj2.foo(); // 输出 name: obj2
// fooOBJ.call(obj3); // 输出 name: obj3
// setTimeout(obj2.foo, 1000); // 输出 name: obj

// 2 考虑函数被bind之后，再被new关键字操作的场景

Function.prototype.bind = function (ctx, ...args) {
    let originalFunc = this; // 因为是Function对象的实例，所以this此时指代函数
    return function (...args2) {
        // TODO - setTimout场景下还会有些问题：this指针不对
        return originalFunc.apply(this||ctx, args.concat(args2));
    }
}

function foo(){
    console.log('name: ', this.name);
}

var obj = {name:'obj'}, obj2={name:'obj2'}, obj3={name:'obj3'};
var fooOBJ = foo.bind(obj);
fooOBJ(); // 输出 name: obj
obj2.foo = foo.bind(obj);
obj2.foo(); // 输出 name: obj2
fooOBJ.call(obj3); // 输出 name: obj3
setTimeout(obj2.foo, 1000); // 输出 name: obj