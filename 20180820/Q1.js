'use strict';
/**
 - 说明：给定一个编码字符，按编码规则进行解码，输出字符串
 - 编码规则是count[letter]，将letter的内容count次输出，
 count是0或正整数，letter是区分大小写的纯字母
 - 示例：
 - const s = '3[a]2[bc]'; decodeString(s); // 返回'aaabcbc'
 - const s = '3[a2[c]]'; decodeString(s); // 返回'accaccacc'
 - const s = '2[abc]3[cd[e]]fg'; decodeString(s); // 返回'abcabccdecdecdefg'
 */
const decodeString = (function () {
    const regx1 = /(\d?\[\w+\])/g;
    const regx2 = /(\d?)\[(\w+)\]/;

    /**
     * 重复给定字符串
     * @param count 重复次数
     * @param str
     * @returns {string}
     */
    function repeat(count, str){
        let temp = [];
        for(let i = 0; i < count; i++){
            temp.push(str);
        }
        return temp.join('');
    }

    /**
     * 解析表达式：2[ab] ==> abab
     * @param code
     * @returns {string}
     */
    function parseCode(code){
        let matches = code.match(regx2);
        if(!Array.isArray(matches)){
            return '';
        }
        let count = matches[1]||1; // 默认值：1
        let str = matches[2];
        return repeat(count, str);
    }

    /**
     * 解析字符串
     * @param str
     * @returns {*}
     */
    function parseStr(str){
        // let newStr = String(str);
        let matches = str.match(regx1);
        if(!Array.isArray(matches)){
            // 递归出口
            return str;
        }
        matches.forEach(code=>{
            str = str.replace(code, parseCode(code));
        });
        // 递归处理
        return parseStr(str);
    }

    return parseStr;
})();

const s1 = '3[a]2[bc]';
console.log(decodeString(s1) === 'aaabcbc');

const s2 = '3[a2[c]]';
console.log(decodeString(s2) === 'accaccacc');

const s3 = '2[abc]3[cd[e]]fg';
console.log(decodeString(s3) === 'abcabccdecdecdefg');


