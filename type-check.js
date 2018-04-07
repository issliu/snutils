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

function isArray(v) {
    if(Array.isArray && typeof Array.isArray === 'function') return Array.isArray(v);
    return getTypeOf(v) === '[object Array]';
}
function isString(v) {
    return getTypeOf(v) === '[object String]';
}
function isNumber(v) {
    return getTypeOf(v) === '[object Number]';
}
function isUndefined(v) {
    return getTypeOf(v) === '[object Undefined]';
}
function isSymbol(v) {
    return getTypeOf(v) === '[object Symbol]';
}
function isArrayBuffer(v) {
    return getTypeOf(v) === '[object ArrayBuffer]';
}
function isDate(v) {
    return getTypeOf(v) === '[object Date]';
}
function isMap(v) {
    return getTypeOf(v) === '[object Map]';
}
function isWeakMap(v) {
    return getTypeOf(v) === '[object WeakMap]';
}
function isSet(v) {
    return getTypeOf(v) === '[object Set]';
}
function isWeakSet(v) {
    return getTypeOf(v) === '[object WeakSet]';
}
function isInt8Array(v) {
    return getTypeOf(v) === '[object Int8Array]';
}
function isInt16Array(v) {
    return getTypeOf(v) === '[object Int16Array]';
}
function isError(v) {
    return getTypeOf(v) === '[object Error]';
}
function isEvalError(v) {
    return getTypeOf(v) === '[object EvalError]';
}
function isDataView(v) {
    return getTypeOf(v) === '[object DataView]';
}
function isFloat32Array(v) {
    return getTypeOf(v) === '[object Float32Array]';
}
function isFloat64Array(v) {
    return getTypeOf(v) === '[object Float64Array]';
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