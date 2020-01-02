/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start

let Max = 2147483647;  // 2**31 - 1 // 7
let Min = -2147483648; // - 2 ** 31 // 8
let Max_10 = 214748364;
let Min_10 = -214748364;
// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function(x) {
//   // if (x > Max || x < Min) return 0;
//   let sing = x > 0 ? 1 : -1;
//   let res =
//     sing *
//     Number(
//       Array.prototype.reduceRight.call(
//         String(Math.abs(x)),
//         function(res, val) {
//           res += val;
//           return res;
//         },
//         ""
//       )
//     );

//   if (res > Max || res < Min) return 0;
//   return res;
// };
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // if (x > Max || x < Min) return 0;
    // 栈的思想， push ，pop ，top
    // 栈顶
    let rev = 0;

    while(x !== 0){
        // x -> pop a number
        let popX = x % 10;
        x = (x - popX) / 10;
        // 

        if (rev >= Max_10 && popX > 7) return 0;
        if (rev <= Min_10 && popX < -8) return 0
        // push in stack 
        rev = rev * 10 + popX;
    }

    if (rev > Max || rev < Min) return 0;
    return rev;
  };
// @lc code=end
