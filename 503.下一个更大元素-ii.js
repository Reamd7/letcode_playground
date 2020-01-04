/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let pointStack = [];
  let len = nums.length;
  let max = len * 2 - 1;
  let res = Array(len);

  for (let index = 0; index < max; index++) {
    const activeIndex = index % len;
    const val = nums[activeIndex];
    while (
        pointStack.length !== 0 &&
        val > nums[pointStack[pointStack.length - 1]]
    ) {
        res[pointStack.pop()] = val;
    }
    pointStack.push(activeIndex);
  }
  while (pointStack.length !== 0) {
    let val = pointStack.pop();
    if (res[val] === undefined){
        res[val] = -1
    }
  }
  return res
};
// @lc code=end
