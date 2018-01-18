'use strict';
(function(){
    if(typeof Function.prototype.softBind !== 'function'){
        Function.prototype.softBind = function (ctx) {
            var args = Array.prototype.slice.call(arguments, 1),
                fn = this,
                bound = function () {
                    // var self = (!this || this === (window || global)) ? ctx : this;
                    var self = (!this || this === (window)) ? ctx : this;
                    var finalArgs = args.concat.apply(args, arguments);
                    return fn.apply(self, finalArgs);
                };
            bound.prototype = Object.create(fn.prototype);
            return bound;
        }
    }
})();

function foo(){
    console.log('name: ', this.name);
}

var obj = {name:'obj'}, obj2={name:'obj2'}, obj3={name:'obj3'};

var fooOBJ = foo.softBind(obj);
fooOBJ(); // 输出 name: obj

obj2.foo = foo.softBind(obj);
obj2.foo(); // 输出 name: obj2
fooOBJ.call(obj3); // 输出 name: obj3
setTimeout(obj2.foo, 1000); // 输出 name: obj

// 柯理化
function bar(a, b, c) {
    return a + b + c;
}

bar.softBind(null, 1, 2)(3);