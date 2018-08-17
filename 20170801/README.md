题目：实现一套自制的事件模型

完成事件：50分钟内

描述：我们在给dom绑定事件的时候，如果子元素过多使用如下方式绑定会有较大性能损耗，希望通过自制事件模型来模拟整个事件机制，达到一个页面一种类型的事件只需要注册事件一次效果。

```
function test(){
    console.log("hello");
}
```

修改前的低效的方式注册事件

```
<div id="test" style="border: 1px red solid;">
 <div onclick="test()">
  测试单击
 </div>
 <div onclick="test()">
  测试单击2
 </div>
 <div onclick="test()">
  测试单击3
 </div>
 <div onclick="test()">
  测试单击4
 </div>
</div>
```

使用自制事件注册方式

```
<div id="test" style="border: 1px red solid;">
 <div ngclick="test">
  测试单击
 </div>
 <div ngclick="test">
  测试单击2
 </div>
 <div ngclick="test">
  测试单击3
 </div>
 <div ngclick="test">
  测试单击4
 </div>
</div>
```