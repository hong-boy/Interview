## 自定义事件注册方式
* 需求：
```  
1 实现诸如v-bind:[EVENT_NAME] 功能，例如：v-bind:click="handler4Click"代表为当前元素绑定click事件，事件句柄为handler4Click
2 可以为指令设置作用域
```
* 用法：
```
DOM结构:  
<div id="test">
    <div v-bind:click="test">
        测试单击
    </div>
    <div v-bind:click="test">
        测试单击2
    </div>
    <div v-bind:click="test">
        测试单击3
    </div>
    <div v-bind:click="test">
        测试单击4
    </div>
</div>

JS注册方式：
directive("v-bind:click", "#test"); // v-bind:click指令只对#test元素内的子元素生效
```