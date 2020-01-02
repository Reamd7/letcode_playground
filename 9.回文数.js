/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let source = x;
    let rev = 0;
    while (x !== 0){
        let popX = x % 10;
        x = (x - popX) / 10;
        rev = rev * 10 + popX;
    };
    return rev === source;
};
// @lc code=end

