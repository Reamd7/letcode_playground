/*
 * @lc app=leetcode.cn id=341 lang=javascript
 *
 * [341] 扁平化嵌套列表迭代器
 */

// @lc code=start
/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} NestedInteger
 * @property {()=>boolean} isInteger - Return true if this NestedInteger holds a single integer, rather than a nested list.
 * @property {()=>number} getInteger -  Return the single integer that this NestedInteger holds, if it holds a single integer, Return null if this NestedInteger holds a nested list
 * @property {()=>NestedInteger[]} getList - Return the nested list that this NestedInteger holds, if it holds a nested list, Return null if this NestedInteger holds a single integer
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.cursor = 0;
  const stack = [...nestedList];
  const res = [];
  while (stack.length) {
    // 使用 pop 从 stack 中取出并移除值
    const next = stack.pop();
    if (!next.isInteger()) {
      // 使用 push 送回内层数组中的元素，不会改动原始输入
      stack.push(...next.getList());
    } else {
      res.push(next);
    }
  }
  // 反转恢复原数组的顺序
  this._list = res.reverse();
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  return this.cursor !== this._list.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {

  return this._list[this.cursor++].getInteger();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
// @lc code=end
