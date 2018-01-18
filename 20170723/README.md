## Javascript - 软绑定
 * 需求：
 ```  
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
```
 * 要求：
 1. 实现softBind方法（1小时内）
 2. 可以使用chrome console工具调试
 3. 使用ES5语法
 4. 支持柯理化
 5. 浏览器环境下运行即可