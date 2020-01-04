/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let len = nums.length;
    if (len < 3) return false;

    // 1) 逆向遍历，最大的middle
    let MaxStack = [
        nums[len - 1]
    ];
    let secondMax = -Infinity;
    for (let index = len - 2; index > -1; index--) {
        let ele = nums[index];
        if (ele < secondMax){ // 若 ele 是 Ai，则要满足 ele < Aj 的条件
            return true
        }else{
            while(
                MaxStack.length !== 0 && 
                ele > MaxStack[MaxStack.length - 1] // 若 ele > Ak, 则 Ak 栈顶中最小的值，不可能是 Ak 可行值。
            ){
                let newAj = MaxStack.pop(); // 则从栈顶中剔除，因为就不可能是Aj，退化为Ak 值
                secondMax = Math.max(newAj, secondMax); // 记录次大值，最大的 Ak
            }
            MaxStack.push(ele) // 保证stack总是单调递增的，并且栈顶总是最小的值
        }
    }

    return false
};
// @lc code=end

