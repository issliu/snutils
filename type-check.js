// ES6 中一共有如下几种数据类型：
// 原生类型： Boolean,Number,String,Null,Undefined,Symbol
// 引用类型：object，
// 全局对象调用 typeof 均返回 "object", 更多情况下，我们需要具体确定到底是什么数据类型，因此先枚举可能的全局对象
// Array, RegExp, Date, Map, WeakMap, Set, WeakSet等等，ES6 新增了非常多的全局对象，具体请参考链接：
// https://tc39.github.io/ecma262/#sec-other-properties-of-the-global-object

function getTypeOf(variable) {
    let typeStr = Object.prototype.toString.call(variable);
    let res = typeStr.match(/^\[object\s(.*)\]$/);
    console.log(res[1], typeof NaN); // 很有意思，typeof NaN 的结果竟然是 number
    return res[1];
}

function isArray(arr) {
    return getTypeOf(arr) === '[object Array]';
}
function isString(arr) {
    return getTypeOf(arr) === '[object String]';
}
function isNumber(arr) {
    return getTypeOf(arr) === '[object Number]';
}

// getTypeOf(NaN); // Number
// getTypeOf(true);
// getTypeOf(1);
// getTypeOf('abc');
// getTypeOf(null);
// getTypeOf(undefined);
// getTypeOf(Symbol(1));
// getTypeOf({});
// getTypeOf([1,2,3]);
// getTypeOf(new ArrayBuffer());
// getTypeOf(new Date());
// getTypeOf(/^abc/);
// getTypeOf(new Map());
// getTypeOf(new WeakMap());
// getTypeOf(new Set());
// getTypeOf(new WeakSet());
// getTypeOf(new Int8Array());
// getTypeOf(new Int16Array());
// getTypeOf(new Error());
// getTypeOf(new EvalError());
// getTypeOf(new DataView());
// getTypeOf(new Float32Array());
// getTypeOf(new Float64Array());