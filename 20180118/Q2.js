'use strict';
function asyncFunc(args) {
    function flatArray(array){
        let temp = [];
        array.forEach(item=>{
            if(Array.isArray(item)){
                let arr = flatArray(item);
                temp = temp.concat(arr);
            }else {
                temp.push(item);
            }

        });
        return temp;
    }
    return Promise.all(flatArray(args));
}

let promise1 = new Promise(resolve => {
    setTimeout(() => {
        console.log('done1');
        resolve()
    }, 1000)
});
let promise2 = new Promise(resolve => {
    setTimeout(() => {
        console.log('done2');
        resolve()
    }, 2000)
});
let promise3 = new Promise(resolve => {
    setTimeout(() => {
        console.log('done3');
        resolve()
    }, 4000)
});
asyncFunc([promise1, [promise2, promise3]]).then(function () {
    console.log('all done')
});