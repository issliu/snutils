// 检测一个字符串是否为回文字符串
// 主要思路是：将字符 A(1),A(2),A(3)...A(n) 从中间拆分，比较从 A(1)-A(middle) 的每个字符串，是否与 A(n-1) 和 A(n-1-m) 分别相等

function checkHuiWenString(str) {
    if (!isString(str)) return false;
    let len = str.length;
    for (let i = 0; i < parseInt(len / 2); i++) {
        if (str[i] !== str[len - 1 - i]) return false;
    }
    return true;
}

function isString(str) {
    return Object.prototype.toString.call(str) === '[object String]';
}
