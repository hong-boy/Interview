'use strict';
// 给定一个乱序且元素不重复数组，求出其中任意两数之和小于5的组合，时间复杂度控制在N*lnN
// let arr = [-1,2,3,0,8];
// combineArray(arr, 5) ==> [[-1,0], [-1,2], [-1, 3], [2,0], [3,0]]

const arr = [-1,2,3,0,8];

function combineArray(arr, num){
    let result = [];
    let temp = [...arr];
    temp.sort();
    for(let i = 0; i<temp.length; i++){
        for(let j = i; j<temp.length; j++){
            if(i!==j && (temp[i]+temp[j]) < num){
                result.push([temp[i], temp[j]]);
            }
        }
    }
    return result;
}

console.log(combineArray(arr, 5))