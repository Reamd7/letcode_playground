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
    // x < 0 => false
    // 尾数 0 且 不为 0 => false
    if (x == 0) return true;
    if (x < 0 || x % 10 == 0) return false;
    // let source = x;
    let rev = 0;

    // 若 x > rev
    while (x > rev){
        // 从右向左 popX 迭代
        let popX = x % 10;
        x = (x - popX) / 10;

        rev = rev * 10 + popX;
    };
    // 1221 12 === 21 偶位数
    // 12321 12 === (123 - 123 % 10) / 10 奇位数，整除，丢弃3
    return x === rev || x === (rev - rev % 10) / 10;
};
// @lc code=end

