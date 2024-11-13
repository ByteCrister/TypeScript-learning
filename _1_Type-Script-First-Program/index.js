// -------------------- -----------------
// let userName: string;
// userName = 'Sadiqul Islam Shakib';
// // userName = 'true' :executed
// // userName = '123' :executed
// // userName = '[1,2]' :executed
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// // userName = 123; :error
// // userName = true; :error
// // userName = [1,2]; :error
// console.log(userName);
// console.log(10);
// -------------------- -----------------
// -------------------- -----------------
var addNumbers = function (num1) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return __spreadArray(__spreadArray([], params, true), [num1], false).reduce(function (s, c) { return s + c; }, 0);
};
console.log(addNumbers(1, 2, 3, 4));
// -------------------- -----------------
