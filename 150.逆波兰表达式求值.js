/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    let stack = []
    for (const element of tokens) {
        if (element === "+"){
            stack.push(
                (Number(stack.pop()) + Number(stack.pop()))
            )
        }else if(element === "-"){
            let div2 = Number(stack.pop())
            let div = Number(stack.pop());
            stack.push(
                (div - div2)
            )
        }else if(element === "*"){
            stack.push(
                (Number(stack.pop()) * Number(stack.pop()))
            )
        }else if(element === "/"){
            let div2 = Number(stack.pop())
            let div = Number(stack.pop());
            stack.push(parseInt(div / div2))
        }else{
            stack.push(element)
        }
    }
    return stack[0]
    for (let index = 0; index < tokens.length; ) {
        const element = tokens[index];
        if (element === "+"){
            tokens[index - 2] = (Number(tokens[index - 2]) + Number(tokens[index - 1]))
            tokens.splice(index - 1, 2)
            index -= 1;
        }else if(element === "-"){
            tokens[index - 2] = (Number(tokens[index - 2]) - Number(tokens[index - 1]))
            tokens.splice(index - 1, 2)
            index -= 1;
        }else if(element === "*"){
            tokens[index - 2] = (Number(tokens[index - 2]) * Number(tokens[index - 1]))
            tokens.splice(index - 1, 2)
            index -= 1;
        }else if(element === "/"){
            let div = Number(tokens[index - 2])
            let div2 = Number(tokens[index - 1]);
            tokens[index - 2] = (
                div - (div % div2)
            ) / div2
            tokens.splice(index - 1, 2)
            index -= 1;
        }else{
            index++
        }
    }
    return tokens[0]
};
// @lc code=end

