/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = {}; 
    // 1. nums1和nums2中所有元素是唯一的。
    // 2. nums1和nums2 的数组大小都不超过1000。=> 允许使用hashMap

    /**
     *     _>|-----
     *    |  |
     *  _>|  |  |-------
     * |  |  |  |
     * 1  3  4  2
     */
    for (let i = 0; i < nums2.length; i++) {
        const val = nums2[i];
        while (stack.length !== 0 && val > stack[stack.length - 1]){
            map[stack.pop()] = val;
        }
        stack.push(val);
    }
    while(stack.length !== 0){
        map[stack.pop()] = -1;
    }
    return nums1.map(val=>map[val])
};
// @lc code=end

