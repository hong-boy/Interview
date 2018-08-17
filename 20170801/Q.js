var CustomEvent = (function () {
    var listeners = {};
    // 传入要处理的元素
    function init(elem){
        elem.addEventListener('click', function (e) {
            if(e.target !== elem){
                var name = e.target.getAttribute('ngclick');
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

CustomEvent.init(document.querySelector('#test'))
CustomEvent.register('test', function(){console.log('hello there')})