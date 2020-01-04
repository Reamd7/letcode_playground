/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // let cmd = ""
    // let res = "";
    // if (path[path.length -1] !== "/") path += "/";
    // for (let index = 0; index < path.length; index++) {
    //     const element = path[index];
    //     if (element === "/"){
    //         if (!cmd){
    //             continue
    //         }else if (cmd === ".."){
    //             // stack.pop()
    //             cmd = ""
    //             res = res.slice(0 ,res.lastIndexOf("/"));
    //         }else if (cmd !== "."){
    //             // stack.push(cmd)
    //             res += `/${cmd}`;
    //             cmd = ""
    //         }else{
    //             cmd = ""
    //         }
    //     }else{
    //         cmd += element
    //     }
    // }
    // return res || "/"

    return '/'+ path.split('/').filter(item=>item && item !== ".").reduce((res, item)=>{
        if(item=='..'){
            res.pop();
        }else{
            res.push(item)
        }
        return res
    },[]).join("/")
};
// @lc code=end

