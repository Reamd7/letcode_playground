/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /**
     * @type {Map<number,number}
     */
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {
        const item = nums[index];
        const maybe = map.get(target - item);
        if (maybe === undefined){
            map.set(item, index);
        }else{
            return [maybe, index]
        }
    }
};
// @lc code=end

