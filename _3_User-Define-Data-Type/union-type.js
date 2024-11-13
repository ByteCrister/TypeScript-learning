// User defined type 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var userId;
userId = 10;
userId = '10';
console.log(userId);
var addNumbers = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    return __spreadArray([], params, true).reduce(function (s, c) { return Number(s) + Number(c); }, 0);
};
console.log(addNumbers(1, 2, 3, '4'));
