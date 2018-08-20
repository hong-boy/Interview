var CustomEvent = (function () {
    var listeners = {};
    function clean(name){
        return name.replace(/^ng/, '');
    }
    // 传入要处理的元素
    function init(elem, type){
        var eventName = clean(type);
        elem.addEventListener(eventName, function (e) {
            if(e.target !== elem){
                var name = e.target.getAttribute(type);
                typeof listeners[name] === 'function' && listeners[name](e);
            }
        })
    }
    // 注册监听器
    function register(name, listener) {
        listeners[name] = listener;
    }


    return {
        init,
        register
    };
})();

CustomEvent.init(document.querySelector('#test'), 'ngclick')
CustomEvent.register('test', function(){console.log('hello there')})