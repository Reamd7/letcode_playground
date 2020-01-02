/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {


    if (s.length % 2 !== 0) return false;

    const stack = [];
    for (const item of s) {
        if (item === "(" || item === "[" || item === "{"){
            stack.push(item)
        }else{
            let remove = stack.pop();
            if (item === ")" && remove !== "("){
                return false
            }else if (item === "]" && remove !== "["){
                return false
            }else if (item === "}" && remove !== "{"){
                return false
            }
        }
    }
    if (stack.length === 0){
        return true
    }
    return false
};
// @lc code=end