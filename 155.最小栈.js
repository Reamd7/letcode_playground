/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

// 18/18 cases passed (124 ms)
// Your runtime beats 72.04 % of javascript submissions
// Your memory usage beats 24.83 % of javascript submissions (44.4 MB)

/**
 * @typedef {{val: number, min:number, prev:StackItem} | null} StackItem
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    /**
     * @type {StackItem}
     */
    // this.list = [];

    this.item = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {

    if (this.item === null){
        this.item = {
            val: x, min: x, prev: null
        }
    }else{
        this.item = {
            val: x, min: Math.min(this.item.min, x), prev: this.item
        }
    }

    // if (this.list.length){
    //     let lastMin = this.list[this.list.length - 1].min;
    //     this.list.push({
    //         val: x,
    //         min: Math.min(lastMin, x)
    //     });
    // }else{
    //     this.list.push({
    //         val: x,
    //         min: x
    //     })
    // }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.item ? (this.item = this.item.prev) : null;
    // this.list.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

    return this.item.val

    // return this.list.length > 0 ? this.list[this.list.length - 1].val : undefined
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

    return this.item.min

    // return this.list.length > 0 ? this.list[this.list.length - 1].min : undefined
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

